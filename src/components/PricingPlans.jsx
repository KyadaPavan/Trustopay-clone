import React from "react";

const PricingPlans = () => {
  return (
    <div className="container py-10 px-4 md:px-8 lg:px-16">
      <div className="flex justify-center mb-4">
        <span className=" bg-black text-white text-sm font-medium px-4 py-2 rounded-md w-max mb-10 mt-8">
          OUR PLANS
        </span>
      </div>
      <h2 className="text-center md:text-4xl text-5xl font-semibold mb-12 px-4 py-2 rounded-md ">
        Affordable Plans for Every Freelancer & Agency
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className="bg-gradient-to-br 
        from-[#8234c5] 
        via-[#742db3] 
        to-[#7840e0] rounded-lg text-white p-6 flex flex-col md:flex-row "
        >
          <div className="bg-white text-black p-6 rounded-md md:w-1/2 md:mr-4 mb-4 md:mb-0 text-left">
            <h3 className="text-3xl font-bold mb-6 text-left">Free Plan</h3>
            <p className="font-semibold text-gray mb-6 text-left">
              Access to basic project management and contracts.
            </p>
            <ul className="font-semibold text-gray mb-6 text-left">
              <li className="mb-3">• For Freelancers</li>
              <li className="mb-3">• Individuals</li>
              <li className="mb-3">• Small Companies</li>
            </ul>
            <a
              href="#"
              className="flex items-center text-xl mb-2 text-[#8234C5] font-semibold hover:underline text-center justify-center "
            >
              Connect Now
              <span className="ml-1">&rarr;</span>
            </a>
          </div>

          <div className="flex flex-col space-y-4 md:w-1/2 gap-2">
            <div className="bg-white text-black p-4 rounded-md text-center font-semibold text-lg">
              0.5%
            </div>
            <div className="bg-white text-black p-4 rounded-md text-center font-semibold text-lg">
              Contract Creation through AI
            </div>
            <div className="bg-white text-black p-4 rounded-md text-center font-semibold text-lg">
              Payment Protection
            </div>
            <div className="bg-white text-black p-4 rounded-md text-center font-semibold text-lg">
              Dispute Resolution
            </div>
          </div>
        </div>

        <div
          className=" rounded-lg text-white p-6 flex flex-col md:flex-row bg-gradient-to-br 
        from-[#8234c5] 
        via-[#742db3] 
        to-[#7840e0]"
        >
          <div className="bg-white text-black p-6 rounded-md md:w-1/2 md:mr-4 mb-4 md:mb-0 ">
            <h3 className="text-3xl font-bold  text-left mb-6">Premium Plan</h3>
            <p className=" text-gray mb-6 text-left font-semibold">
              Access to premium project management and contracts.
            </p>
            <ul className="font-semibold text-gray mb-6 text-left">
              <li className="mb-4">• For Agencies</li>
              <li className="mb-4">
                • For Individuals With Larger Ticket Size
              </li>
            </ul>
            <a
              href="#"
              className="flex items-center text-xl text-[#8234C5] font-semibold hover:underline  text-center justify-center"
            >
              Apply Now
              <span className="ml-1">&rarr;</span>
            </a>
          </div>

          <div className="flex flex-col space-y-4 md:w-1/2 gap-2 ">
            <div>
              <div className="bg-white text-black p-4 rounded-md text-center font-semibold text-lg mb-2">
                Subscription <br />
                <span className="text-2xl font-bold">₹499</span>
              </div>
            </div>

            <div className="bg-white text-black p-4 mb-2 rounded-md text-center  font-semibold text-lg">
              Transaction Fee <br />
              <span className="text-lg font-bold">0.3%</span>
            </div>
            <div className="bg-white text-black p-4 rounded-md text-center  font-semibold text-lg">
              Analytics and Faster Dispute Management
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
