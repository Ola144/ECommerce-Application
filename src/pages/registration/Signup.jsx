import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useMyContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../../components/loader/loader";

function Signup() {
  const context = useContext(useMyContext);
  const { loading, setLoading } = context;

  // Navigate
  const navigate = useNavigate();

  // User Signup State
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // User Signup Function
  const userSignupFuction = async () => {
    // Validation for Signup
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All fields are required!");
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // Create user object
      const user = {
        name: userSignup.name,
        password: userSignup.password,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // Create user reference
      const userRefrence = collection(fireDB, "user");

      // Add user Detail
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully!");

      setLoading(false);
      navigate("/login");
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
            Signup
          </h2>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder:text-pink-200"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
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
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-3 w-full mx-auto">
          <button
            className="w-full py-3 bg-pink-600 text-white hover:bg-pink-300 hover:text-gray-100 rounded-md"
            onClick={userSignupFuction}
          >
            Signup
          </button>
        </div>
        <div className="mt-6 w-full">
          <p className="font-bold">
            Already have an account{" "}
            <Link to={"/login"} className="text-pink-500">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
