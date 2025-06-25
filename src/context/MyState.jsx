import React, { useState, useEffect } from "react";
import MyContext from "./myContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import { toast } from "react-toastify";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);

  // GET ALL PRODUCTS
  const [getAllProduct, setGetAllProduct] = useState();

  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFunction();
  }, []);

  // GET ALL PRODUCT FUNCTIION
  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      // To Get The Product
      const q = query(collection(fireDB, "products"), orderBy("time"));
      // To Get The Product

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  // Order State
  const [getAllOrder, setGetAllOrder] = useState([]);

  // GET ALL ORDER FUNCTIION
  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
      // To Get The Order
      const q = query(collection(fireDB, "order"), orderBy("time"));
      // To Get The Order

      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  // User State
  const [getAllUser, setGetAllUser] = useState([]);

  // GET ALL USER FUNCTIION
  const getAllUserFunction = async () => {
    setLoading(true);
    try {
      // To Get The User
      const q = query(collection(fireDB, "user"), orderBy("time"));
      // To Get The User

      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  // Delete Order Function
  const deleteOrder = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("Order Deleted Succesfully!");
      getAllOrderFunction();
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  // Delete Order Function
  const deleteUser = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "user", id));
      toast.success("User Deleted Succesfully!");
      getAllUserFunction();
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  // Currecy Format
  const formatCurrency = (amount, currencyCode = "USD", locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
    }).format(amount);
  };

  // Add To Cart State
  // const [cart, setCart] = useState([]);

  // Load cart items from localStorage on component mount
  // useEffect(() => {
  //   const storedCart = window.localStorage.getItem("cart");
  //   if (storedCart) {
  //     setCart(JSON.parse(storedCart));
  //   }
  // }, []);

  // Update localStorage whenever cartItems changes
  // useEffect(() => {
  //   window.localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  // Add to Cart Function
  // const addToCart = (product) => {
  //   // const updateCart = (prevCart) => {
  //   //   const existingItem = cart.find((item) => item.id === product.id);

  //   //   if (existingItem) {
  //   //     return prevCart.map(
  //   //       (item) =>
  //   //         item.id === product.id
  //   //           ? { ...item, quantity: item.quantity + 1 }
  //   //           : null,
  //   //       toast.success("Item Already Exist In The Cart!")
  //   //     );
  //   //   } else {
  //   //     return [
  //   //       ...prevCart,
  //   //       { ...product, quantity: 1 },
  //   //       toast.success("Add To Cart"),
  //   //     ];
  //   //   }
  //   // };
  //   // setCart(updateCart);

  //   const existingItem = cart.find((x) => x.id === product.id);

  //   if (existingItem) {
  //     toast.success("This product is already added!");
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //     toast.success("Add to Cart!");
  //   }
  // };

  // Update CartItem length in Navbar and display cartItem on cart page
  // let [cartItem, setCartItem] = useState([]);

  // cartItem = JSON.parse(localStorage.getItem("cart"));

  // useEffect(() => {
  //   setCartItem();
  // }, [cartItem]);

  // Increment and Decrement of Quantity
  // const [products, setProducts] = useState([cartItem]);

  // const increment = (id) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === id
  //         ? { ...product, quantity: product.quantity + 1 }
  //         : product
  //     )
  //   );
  // };

  // const decrement = (id) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.map((product) =>
  //       product.id === id && product.quantity > 1
  //         ? { ...product, quantity: product.quantity - 1 }
  //         : product
  //     )
  //   );
  // };

  // Remove from cart
  // const removeFromCart = (id) => {
  //   setProducts((prevProducts) =>
  //     prevProducts.filter((product) => product.id !== id)
  //   );
  //   toast.success("Item Removed!");
  // };

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        getAllOrder,
        getAllUser,
        getAllProductFunction,
        formatCurrency,
        deleteOrder,
        deleteUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
