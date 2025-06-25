import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyContext from "../../context/myContext";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../loader/loader";

const categoryList = [
  {
    name: "Fashion",
  },
  {
    name: "Shirt",
  },
  {
    name: "Jacket",
  },
  {
    name: "Mobile",
  },
  {
    name: "Laptop",
  },
  {
    name: "Shoe",
  },
  {
    name: "Home",
  },
  {
    name: "Books",
  },
];

function UpdateProductPage() {
  const context = useContext(MyContext);
  const { loading, setLoading, getAllProductFunction } = context;

  useEffect(() => {
    getSingleProductFunction();
  }, []);

  // Nativate
  const navigate = useNavigate();
  const { id } = useParams();

  // Product State
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImgUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // const getSingleProductFunction
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));

      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImgUrl: product?.productImgUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date,
      });
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  // Update Product Function
  const updateProductFunction = async () => {
    setLoading(true);

    try {
      await setDoc(doc(fireDB, "products", id), product);
      toast.success("Update Product Successfully!");
      getAllProductFunction;
      setLoading(false);
      navigate("/admin-dashboard");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="login_form bg-pink-50 px-8 py-3 border border-pink-100 rounded-xl shadow-md">
        <div className="mb-2">
          <h2 className="text-center text-2xl font-bold text-pink-500">
            Update Product
          </h2>
        </div>

        <div className="mb-2">
          <input
            type="text"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Prduct Title"
            value={product.title}
            onChange={(e) => {
              setProduct({
                ...product,
                title: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Product Price"
            value={product.price}
            onChange={(e) => {
              setProduct({
                ...product,
                price: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Product Image URL"
            value={product.productImgUrl}
            onChange={(e) => {
              setProduct({
                ...product,
                productImgUrl: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-2">
          <select
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none text-pink-200"
            value={product.category}
            onChange={(e) => {
              setProduct({
                ...product,
                category: e.target.value,
              });
            }}
          >
            <option value="" defaultValue={""}>
              Select Product Category
            </option>
            {categoryList.map((category, index) => {
              return (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-2">
          <textarea
            cols="30"
            rows="5"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Product Description"
            value={product.description}
            onChange={(e) => {
              setProduct({
                ...product,
                description: e.target.value,
              });
            }}
          ></textarea>
        </div>
        <div className="mt-2 w-full mx-auto">
          <button
            className="w-full py-3 bg-pink-600 text-white hover:bg-pink-300 hover:text-gray-100 rounded-md"
            onClick={updateProductFunction}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductPage;
