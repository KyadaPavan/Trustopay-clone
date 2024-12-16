import React from "react";

const Benefits = () => {
  return (
    <div className="container py-10 px-4 md:px-8 lg:px-16">
      <div className="flex justify-center mb-4">
        <span className=" bg-black text-white text-sm font-medium px-4 py-2 rounded-md w-max mb-10 mt-8">
          OUR BENEFITS
        </span>
      </div>

      <h2 className="text-gray-800 text-center md:text-4xl text-5xl font-semibold mb-12 px-4 py-2 rounded-md">
        Benefits of Using Trustopay
      </h2>

      <div className="flex items-center justify-center">
        <img src="tp.svg" alt="Trustopay Benefits" className=" object-cover" />
      </div>
    </div>
  );
};

export default Benefits;
