import React from "react";
import "../App.css";
import CreateContractButton from "./CreateContractButton";

const SemiMainPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row lg:gap-8 flex-wrap">
        <div className="order-1 lg:order-1 flex-[1] lg:flex-[1] flex flex-col mt-8 lg:mt-0 gap-8 ">
          <div>
            <p className="text-lg md:text-lg lg:text-lg font-medium mb-4 lineheight  text-left">
              Create Contract In Just 1 minute with AI, Secure payments with CSB
              Bank, and Manage Project with Milestone-Based Payments–Tailored
              for freelancers, Agencies & IT Professionals.
            </p>
          </div>

          <button className="py-3 px-6 rounded-full inline-flex items-center">
            <CreateContractButton />
          </button>

          <div>
            <p className="mt-4 font-medium">
              Over <span className="font-bold">1,000+</span> Freelancers Already
              Joined
            </p>
            <div className="flex mt-2 -space-x-2">
              <img
                src="profile1.jpg"
                alt="profile1"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="profile2.jpg"
                alt="profile2"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="profile1.jpg"
                alt="profile3"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>

        <div className="order-3 lg:order-2 flex-[2.5] flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="phone-mokup.png"
            alt="Phone Mockup"
            className="w-auto max-h-[100%]"
          />
        </div>

        <div className="order-2 lg:order-3 flex-[1] lg:flex-[1] flex flex-col justify-start items-start mt-8 lg:mt-0 gap-8">
          <img src="CSBBank.jpg" alt="CSB Bank Logo" className="w-28 mb-4" />
          <div className="text-2xl font-bold flex flex-col justify-start items-start gap-8 text-start">
            <p className="text-start font-medium">Bnaking Patner</p>
            <p>
              <span className="text-5xl">200+</span>

              <span className="block text-sm semi-bold">Contract Created</span>
            </p>

            <p className="mt-4">
              <span className="text-5xl">20L+</span>
              <span className="block text-sm font-semibold">
                Payments Protected
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiMainPage;
