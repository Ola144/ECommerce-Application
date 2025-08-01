import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // console.log(pathname);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  return null;
};

export default UseScrollTop;
