import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import useMyContext from "../../context/useMyContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function ProductInfo() {
  const context = useContext(useMyContext);
  const { loading, setLoading, formatCurrency } = context;

  const [product, setProduct] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getProductData();
  }, []);

  // getProductData
  const getProductData = async () => {
    setLoading(true);

    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));

      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const onAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Added  To Cart!");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <section className="py-5 px-4 lg:py-16 font-poppins dark:bg-gray-800">
            <div className="max-w-full px-4 mx-auto">
              <div className="flex flex-wrap mb-24 -mx-4 items-center">
                <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                  <div className="">
                    <div className="">
                      <img
                        src={product.productImgUrl}
                        alt="Product Image"
                        className="w-full lg:h-[39em] rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="lg:pl-20">
                    <div className="mb-6">
                      <h2 className="mx-w-xl mb-6 text-xl font-semibold loading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                        {product.title}
                      </h2>
                      <div className="flex flex-wrap items-center mb-6">
                        <ul className="flex mb-4 mr-2 lg:mb-0">
                          <li>
                            <a href="">
                              <div className="text-red-400 flex gap-2">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                        <span>{formatCurrency(product.price)}</span>
                      </p>
                    </div>
                    <div className="mb-6">
                      <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-600">
                        Description:
                      </h2>
                      <p>{product.description}</p>
                    </div>
                    <div className="mb-3"></div>
                    <div className="flex flex-wrap items-center">
                      {cartItems.find((p) => p.id === product.id) ? (
                        <button
                          className="bg-gray-500 w-full text-white py-[4px] rounded-lg font-bold"
                          disabled
                        >
                          Already In The Cart
                        </button>
                      ) : (
                        <button
                          onClick={() => onAddToCart(product)}
                          className="bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
}

export default ProductInfo;
