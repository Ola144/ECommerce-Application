import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/useMyContext";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import Loader from "../../components/loader/loader";

function Login() {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  // Navigate
  const navigate = useNavigate();

  // User Login State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  // User Login Function
  const userLoginFunction = async () => {
    // Validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All fields are required!");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user.uid)
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully!");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate("/admin-dashboard");
          }
        });

        // Retun data variable
        return () => data;
      } catch (err) {
        toast.error(err.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="login_form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-pink-500">
            Login
          </h2>
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-3 w-full mx-auto">
          <button
            className="w-full py-3 bg-pink-600 text-white hover:bg-pink-300 hover:text-gray-100 rounded-md"
            onClick={userLoginFunction}
          >
            Login
          </button>
        </div>
        <div className="mt-6 w-full">
          <p className="font-bold">
            Don't have an account{" "}
            <Link to={"/signup"} className="text-pink-500">
              Signup
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
