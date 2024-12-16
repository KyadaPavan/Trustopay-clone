import Navbar from "./Navbar";
import FixedButtons from "./FixedButtons";
import React from "react";
import "animate.css";

const MainPage = () => {
  return (
    <div className="App">
      <Navbar />
      <FixedButtons />

      <div className="flex justify-center">
        <div className="w-[1200px] py-48">
          <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl   font-bold text-gray-900">
            Project Management, Contract
          </h1>
          <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-4">
            Creation
          </h1>
          <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-4">
            Payment Protection For
          </h1>
          <h1 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mt-4">
            Freelancers
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
