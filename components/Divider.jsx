import React from "react";

const Divider = () => {
  return (
    <div className="relative w-full mt-6 " >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-gray-500"></span>
      </div>
    </div>
  );
};

export default Divider;
