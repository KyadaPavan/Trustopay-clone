import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const DropdownMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const dropdownData = [
    {
      icon: <FaAngleDown className="text-gray-500" />,
      openIcon: <FaAngleUp className="text-gray-500" />,
      title: "Trustopay for Freelancers",
      description:
        "Get paid on time with Trustopay protection, milestone payments, and AI-powered contracts",
      imgsource: "freelancer.png",
    },
    {
      icon: <FaAngleDown className="text-gray-500" />,
      openIcon: <FaAngleUp className="text-gray-500" />,
      title: "Trustopay for Agencies",
      description:
        "Manage contracts, track deliverables, and ensure smooth cash flow with milestone-based payments.",
      imgsource: "agencies.png",
    },
    {
      icon: <FaAngleDown className="text-gray-500" />,
      openIcon: <FaAngleUp className="text-gray-500" />,
      title: "Trustopay for Clients",
      description:
        "Secure your payments in Trustopay, approve milestones, and release funds when satisfied.",
      imgsource: "agencies (1).png",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10 -ml-1">
      {dropdownData.map((item, index) => (
        <div
          key={index}
          className=" cursor-pointer mb-10"
          onClick={() => toggleDropdown(index)}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <img
                src={item.imgsource}
                alt="Freelancer"
                className="h-8 w-8 mr-8"
              />
              <span className="ml-2 font-medium text-xl">{item.title}</span>
            </div>
            {activeDropdown === index ? (
              <FaAngleUp className="text-gray-600 " />
            ) : (
              <FaAngleDown className="text-gray-600 " />
            )}
          </div>
          {activeDropdown === index && (
            <div className="px-4 py-2 text-gray-600 text-left">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
