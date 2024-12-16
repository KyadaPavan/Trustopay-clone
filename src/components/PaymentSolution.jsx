import DropdownMenu from "./DropdownMenu";

const PaymentSolution = () => {
  return (
    <div className=" container flex flex-col md:flex-row items-center md:items-start justify-between gap-6 px-6 py-10 ">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="bg-black text-white text-sm font-medium px-4 py-2 rounded-md w-max mb-10 mt-8">
          Payment Solutions
        </div>
        <h1 className="text-5xl font-semibold mb-6 px-4 py-2 rounded-md w-max ">
          Built For Industry
        </h1>
        <DropdownMenu />
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center">
        <img
          src="circle1.svg"
          alt="Guarantee Payments"
          className="w-4/5 object-cover"
        />
      </div>
    </div>
  );
};

export default PaymentSolution;
