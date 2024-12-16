import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container text-white px-6 lg:px-16 py-20">
      <div className="text-left">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            Ready to level up your payment process?
          </h2>
          <a
            href="https://trustopay.com/genuine.html"
            className="flex items-center bg-white text-purple-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Create Contract <FaArrowRight className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pt-8">
          <div>
            <h3 className="text-xl font-bold border-b border-gray-900 pb-4 mb-6">
              Company
            </h3>
            <ul className="space-y-4 font-semibold">
              <li>
                <a
                  href="https://trustopay.com/about.html"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://trustopay.com/blog.html"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="https://trustopay.com/termscondition.html"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="https://trustopay.com/privacypolicy.html"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://trustopay.com/contact.html"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-gray-900 pb-4 mb-6">
              Features
            </h3>
            <ul className="space-y-4 font-semibold">
              <li>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Contract Creation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Project Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Payment Protection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Dispute Resolution
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-gray-900 pb-4 mb-6">
              Genuine
            </h3>
            <ul className="space-y-4 font-semibold">
              <li>
                <a
                  href="#"
                  className="hover-underline relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover-underline relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Analysis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover-underline relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Purchases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover-underline relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Received Goods
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover-underline relative inline-block after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  Trust Badge
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-gray-900 pb-4 mb-6">
              Download App
            </h3>
            <p className="mb-4 font-semibold">
              Available on IOS & Android Both
            </p>
            <div className="flex flex-col gap-8">
              <a
                href="https://play.google.com/store/search?q=trustopay&c=apps&hl=en_US"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="app_store.webp"
                  alt="Download on App Store"
                  className="w-48"
                />
              </a>
              <a
                href="https://play.google.com/store/search?q=trustopay&c=apps&hl=en_US"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="google_play.webp"
                  alt="Download on Google Play"
                  className="w-48"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-900 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            Copyright © 2024 Trustopay, All rights reserved.
          </p>
          <div className="flex space-x-4 text-white">
            <a
              href="https://www.youtube.com/@Trustopay"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://www.facebook.com/trustopayindia"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/trustopayy/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/trustopay_official/"
              target="_blank"
              className="hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
