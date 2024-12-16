import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function FixedButtons() {
  return (
    <>
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
        <a
          href="https://play.google.com/store/search?q=trustopay&c=apps&hl=en_US"
          target="_blank"
          className="bg-purple-600 text-white px-4 py-4 font-semibold rounded-r-lg hover:bg-purple-700 transition"
          style={{
            transform: "rotate(0deg)",
            writingMode: "vertical-lr",
            whiteSpace: "nowrap",
          }}
        >
          Download Now
        </a>
      </div>

      <div className="fixed right-6 bottom-6 flex gap-4 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=6353093171&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>

        <a
          href="/"
          className="flex items-center justify-center bg-gray-800 text-white w-14 h-14 rounded-full shadow-lg hover:bg-gray-700 transition"
          aria-label="Go to Top"
        >
          <FaArrowUp size={28} />
        </a>
      </div>
    </>
  );
}
