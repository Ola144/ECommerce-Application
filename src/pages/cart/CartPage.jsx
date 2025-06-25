import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/useMyContext";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../redux/cartSlice";
import ByNowModal from "../../components/byNowModal/ByNowModal";
import { toast } from "react-toastify";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Navigate } from "react-router-dom";

function CartPage() {
  const context = useContext(MyContext);
  const { formatCurrency } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const onIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const onDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const onDeleteCartItem = (item) => {
    dispatch(deleteFromCart(item));
  };

  const cartItemTotal = cartItems
    .map((item) => item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // BUY NOW FUNCTION
  //   user
  const user = JSON.parse(localStorage.getItem("users"));

  // By Now State
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const byNowFunction = async () => {
    if (
      addressInfo.name === "" ||
      addressInfo.address === "" ||
      addressInfo.pincode === "" ||
      addressInfo.mobileNumber === ""
    ) {
      toast.error("All fields are required!");
    } else {
      // Order Info
      const orderInfo = {
        cartItems,
        addressInfo,
        email: user.email,
        userId: user.uid,
        status: "confirmed",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      try {
        const orderRef = collection(fireDB, "order");
        await addDoc(orderRef, orderInfo);
        setAddressInfo({
          name: "",
          address: "",
          pincode: "",
          mobileNumber: "",
        });
        toast.success("Order Placed Successfully!");
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  return (
    <Layout>
      <section className="my-5 lg:px-16 px-10 md:px-5 mx-auto">
        <div className="text-black mb-4 font-bold text-2xl">
          <h2>Shopping Cart</h2>
        </div>

        <div className="flex justify-center lg:justify-between md:justify-center flex-wrap items-start w-full mx-auto">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((product, index) => {
                return (
                  <div key={index} className="shadow-lg p-3 rounded-md">
                    <div className="flex justify-between items-start">
                      <img
                        src={product.productImgUrl}
                        alt="Product Image"
                        className="w-20"
                      />
                      <div className="ml-4">
                        <p className="text-black font-bold">
                          {product.title.slice(0, 50)}
                        </p>
                        <div className="mt-1">
                          <span className="text-gray-700 mr-4 text-sm">
                            {product.category}
                          </span>
                          <span className="mr-4 text-black font-bold text-lg">
                            {formatCurrency(product.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2 px-3 py-4 p-4">
                      <div className="shadow-lg bg-white px-8 py-2">
                        <button
                          onClick={() => onDecrementQuantity(product.id)}
                          className="text-black mr-5 text-lg"
                        >
                          -
                        </button>
                        <span className="text-black">{product.quantity}</span>
                        <button
                          onClick={() => onIncrementQuantity(product.id)}
                          className="text-black ml-5 text-lg"
                        >
                          +
                        </button>
                      </div>
                      <div
                        className="text-red-700 text-sm cursor-pointer ml-6"
                        title="Double Click To Remove"
                        onClick={() => onDeleteCartItem(product.id)}
                      >
                        <i className="fa fa-trash"></i> Remove
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div className="w-80 ">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgh80n09s-I22rGvRCtl7yunDd5MO6ZcNAwA&s"
                    alt=""
                    className="w-32 translate-x-36 sm:translate-x-40 items-center"
                  />
                  <h1 className="text-red-600 lg:text-center md:text-center text-center font-bold text-3xl mt-6 w-full">
                    No Product Found In The Cart!
                  </h1>
                </div>
              </div>
            </>
          )}
          <div className="w-80 lg:mt-0 md:mt-0 mt-5">
            <p className="text-lg mb-6">Price Details</p>
            <div className="flex justify-between items-center my-2">
              <p className="text-lg text-gray-500">
                Price ({cartItemTotal} item)
              </p>
              <p className="text-lg font-bold">{formatCurrency(cartTotal)}</p>
            </div>
            {/* <div className="flex justify-between items-center my-2">
              <p className="text-lg text-gray-500">Discout</p>
              <p className="text-lg text-gray-400">-$99</p>
            </div> */}
            <div className="flex justify-between items-center my-2">
              <p className="text-lg text-gray-500">Delivery Charge</p>
              <p className="text-lg text-gray-400">Fine</p>
            </div>
            <div className="flex justify-between items-center mt-7">
              <p className="text-lg text-black">Total Amount</p>
              <p className="text-lg font-bold text-black">
                {formatCurrency(cartTotal)}
              </p>
            </div>
            <div className="mt-6 w-80">
              {user ? (
                <ByNowModal
                  addressInfo={addressInfo}
                  setAddressInfo={setAddressInfo}
                  byNowFunction={byNowFunction}
                />
              ) : (
                <Navigate to={"/login"} />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CartPage;
