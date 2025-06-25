import React from "react";

function Loader() {
  return (
    <div
      role="status"
      className="absolute text-center left-0 bg-black/50 w-full h-screen m-auto"
    >
      <div className="flex justify-center items-center h-full">
        <span className="border-4 border-gray-100 inline-flex justify-center items-center size-5 p-3 border-t-4 border-t-pink-700 animate-spin rounded-full"></span>
      </div>
    </div>
  );
}

export default Loader;
