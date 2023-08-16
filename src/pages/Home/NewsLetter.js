import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-teal-500 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">NEWSLETTER</h2>
        <p className="text-gray-600 text-lg mb-8">Subscribe to Our Best Offers.</p>
        <form className="max-w-lg w-full">
          <div className="flex items-center ">
            <input
              type="email"
              className="px-4 py-3 w-full focus:outline-none bg-white "
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-sky-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-r-md ml-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
