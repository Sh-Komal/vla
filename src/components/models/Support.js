import React from "react";
import { FaTimes } from "react-icons/fa";
import SupportImage from "./SupportImage";

const Support = ({ closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    closeModal(); // Close the modal after form submission
  };

  return (
    <div className="modal-content p-6 bg-white rounded-lg shadow-lg flex">
      <div className="w-1/2 flex flex-col justify-center">
        <SupportImage />
      </div>
      <div className="w-1/2 flex flex-col gap-6 ml-4">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800 transition focus:outline-none"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <h2 className="text-2xl font-bold">Contact Support</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="px-4 py-2 border rounded-md w-full focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border rounded-md w-full focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="query" className="block font-medium mb-2">
              Query
            </label>
            <textarea
              id="query"
              rows="5"
              className="px-4 py-2 border rounded-md w-full resize-none focus:outline-none"
              placeholder="Your Query"
            />
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
