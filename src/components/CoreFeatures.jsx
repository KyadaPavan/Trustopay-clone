import React from "react";

const CoreFeatures = () => {
  const features = [
    {
      title: "Secure Payments",
      description:
        "Your funds are safely held in Trustopay until project completion.",
    },
    {
      title: "Project Management Tools",
      description: "Manage deadlines, milestones, and tasks from one platform.",
    },
    {
      title: "Contract Creation",
      description:
        "Easily create detailed, transparent contracts with clear terms.",
    },
    {
      title: "Dispute Resolution",
      description:
        "Get disputes resolved quickly and fairly, so you stay focused on your work.",
    },
  ];

  return (
    <div className=" container py-10 px-4 md:px-8 lg:px-16 mt-16">
      <div className="flex justify-center mb-4">
        <span className="bg-black text-white text-xs font-semibold px-4 py-1 rounded-lg">
          CORE FEATURES
        </span>
      </div>

      <h1 className="text-center text-3xl md:text-6xl font-bold text-gray-800 mt-12 mb-12">
        Explore Trustopay's Powerful Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" p-6 rounded-lg border-2 border-gray-700 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
