import React from "react";

const Works = () => {
  return (
    <div className=" container py-10 px-4 md:px-8 lg:px-16 mt-16">
      <div className="flex justify-center mb-4">
        <span className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-lg">
          Our Process
        </span>
      </div>

      <h1 className="text-center text-3xl md:text-6xl font-bold text-gray-800 mt-12 mb-12">
        How Trustopay Works
      </h1>

      <div className="flex justify-center">
        <a href="#" className="bg-green-800 p-6 rounded-md">
          <img src="tp_whitelogo.svg" alt="TrustoPay Logo" className="h-5" />
        </a>
      </div>

      <div className="flex justify-center">
        <img
          src="process.png"
          alt="Workflow"
          className="w-full md:w-5/6 lg:w-4/6 object-cover -my-8 md:-my-8"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 mt-6 ">
        <div className="border-2 border-[#9334E9]  rounded-xl  p-6 text-center">
          <h3 className=" text-xl">Create a contract on TrustoPay</h3>
        </div>
        <div className="border-2 border-[#9334E9]  rounded-xl  p-6 text-center">
          <h3 className=" text-xl">Client deposits payment into TrustoPay</h3>
        </div>
        <div className="border-2 border-[#9334E9]  rounded-xl p-6 text-center">
          <h3 className=" text-xl">Complete milestones and get paid</h3>
        </div>
      </div>
    </div>
  );
};

export default Works;
