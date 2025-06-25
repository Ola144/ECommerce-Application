import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-pink-600 py-4 rounded-b-md w-full">
        <div className="container px-5 mx-auto items-center">
          <div className="flex title-font font-medium items-center  justify-between text-white flex-col gap-3 lg:flex-row md:flex-row">
            <div className="md:mb-2 sm:mb-2">
              <span className="text-xl font-bold">E-Commerce</span>
              <span className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:">
                <Link
                  to={"/"}
                  className="text-gray-100 ml-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-copyright"></i> 2025{" "}
                  <i className="fa fa-minus"></i> @ecommerce
                </Link>
              </span>
            </div>
            <div className="text-white flex gap-2 cursor-pointer">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
