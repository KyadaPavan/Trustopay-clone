import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CreateContractButton = () => {
  return (
    <div className="relative inline-block overflow-hidden rounded-full">
      <a
        href="https://trustopay.com/genuine.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="relative group overflow-hidden px-8 h-12 border-2 border-purple-500 rounded-full">
          <div
            aria-hidden="true"
            class="transition duration-300 group-hover:-translate-y-12"
          >
            <div class="h-12 flex items-center justify-center">
              <div class="text-purple-700 font-semibold flex justify-center items-center gap-2">
                Create Contract
                <FaArrowRight />
              </div>
            </div>
            <div class="h-12 flex items-center justify-center">
              <span class="text-purple-700 font-semibold">Now</span>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
};

export default CreateContractButton;
