import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import CreateContractButton from "./CreateContractButton";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a a="/">
          <img src="./logo.svg" alt="TrustoPay" className="h-16 w-40" />
        </a>

        <div className="hidden lg:flex items-center space-x-6 font-bold text-lg">
          <a href="/" className="hover:text-gray-600 text-gray-800">
            Home
          </a>
          <div className="relative group">
            <button className="hover:text-gray-600 text-gray-800">
              Products
            </button>
            <div className="absolute left-0 w-32 bg-white shadow-md rounded-md hidden group-hover:block">
              <a
                href="#genuine"
                className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-600 text-gray-800"
              >
                Genuine
              </a>
            </div>
          </div>
          <a href="/#about" className="hover:text-gray-600 text-gray-800">
            About
          </a>
          <a href="/#contact" className="hover:text-gray-600 text-gray-800">
            Contact
          </a>
        </div>

        <CreateContractButton />

        <div className="lg:hidden">
          <button
            className={`text-2xl ${
              isMenuOpen ? "text-neon-green" : "text-green-800"
            }`}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4 space-y-4">
          <a href="/" className="block hover:text-gray-600 text-gray-800">
            Home
          </a>
          <a
            href="/products"
            className="block hover:text-gray-600 text-gray-800"
          >
            Products
          </a>
          <a href="/about" className="block hover:text-gray-600 text-gray-800">
            About
          </a>
          <a
            href="/contact"
            className="block hover:text-gray-600 text-gray-800"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
