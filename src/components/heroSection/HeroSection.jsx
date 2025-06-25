import React from "react";
// import heroImg from "/public/images/herosection.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-blue-600 text-white py-4 px-4 text-center h-64">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Your Online Shop
        </h1>
        <p className="text-3xl md:text-4xl font-semibold mb-3 text-pink-600">
          24/7
        </p>
        <p className="text-lg md:text-xl mb-4 text-white font-bold">
          Shop Anytime. Deliver Anytime.
        </p>
        <Link to={"/allProduct"}>
          <button className="bg-pink-500 text-pink-100 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-pink-400 transition">
            Start Shopping
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
