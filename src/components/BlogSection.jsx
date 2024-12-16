import React from "react";

const blogs = [
  {
    id: 1,
    image: "blog1.png",
    date: "NOVEMBER 7, 2024",
    title: "Selecting the Appropriate Payment Platform",
    link: "https://trustopay.com/blog.html",
  },
  {
    id: 2,
    image: "blog2.png",
    date: "NOVEMBER 7, 2024",
    title: "The Ultimate Guide to Avoiding Scams in Online Freelancing",
    link: "https://trustopay.com/blog.html",
  },
  {
    id: 3,
    image: "blog3.png",
    date: "NOVEMBER 7, 2024",
    title: "Why Trust is Crucial in Online Transactions and How to Build It",
    link: "https://trustopay.com/blog.html",
  },
];

const BlogSection = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      <div className="flex justify-center mb-4">
        <span className=" bg-black text-white text-sm font-medium px-4 py-2 rounded-md w-max mb-10 mt-8">
          OUR BLOGS
        </span>
      </div>

      <h2 className="text-gray-800 text-center md:text-4xl text-5xl font-semibold mb-12 px-4 py-2 rounded-md">
        Our Latest Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex flex-col items-start">
            <a
              href={blog.link}
              className="w-full block overflow-hidden rounded-lg"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 mb-4"
              />
            </a>

            <p className="text-gray-800 mb-4">{blog.date}</p>

            <a
              href={blog.link}
              className="text-lg font-semibold text-gray- hover:text-[#7a4ba3] transition duration-300 text-left"
            >
              {blog.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
