const WhyChooseUs = () => {
  const features = [
    {
      img: "Shape1.png",
      title: "Payment",
      description: "Fast, safe payments with Trustopay protection.",
    },
    {
      img: "Shape2.png",
      title: "Contract",
      description:
        "Simple contract creation—ensure transparency and avoid miscommunication.",
    },
    {
      img: "Shape3.png",
      title: "Payout",
      description: "Guaranteed payouts—no more payment delays or disputes.",
    },
  ];

  return (
    <div className="px-6 py-12 text-center container">
      <div className="inline-block mb-4 bg-black text-white text-sm font-medium px-4 py-2 rounded-md">
        Why Choose Us
      </div>

      <h2 className="  text-5xl font-semibold mb-6 px-4 py-2 rounded-md">
        Ready to Secure Your Next Payment?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white   p-6 rounded-lg"
          >
            <div className="w-40 h-40 mb-6 flex items-center justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl text-center font-bold mb-4">
              {feature.title}
            </h3>

            <p className="text-medium text-gray-900">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
