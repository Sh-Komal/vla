
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Track from '../../Assets/track_image.png'

const TrackOrder = ({ closeModal }) => {
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic to handle the order tracking with orderId
    console.log("Tracking order with orderId:", orderId);
  };

  return (
    <div className="modal-content p-6 bg-white rounded-lg shadow-lg flex">
      <div className="w-1/2 flex flex-col justify-center">
        {/* Your image for track order */}
        <img
          src={Track}
          alt="Track Order"
          className="w-full h-auto"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-6 ml-4">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={closeModal}
            className="text-gray-600  hover:text-gray-800 transition focus:outline-none"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <h2 className="text-2xl font-bold">Track Your Order</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="orderId" className="block font-medium mb-2">
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="px-4 py-2 border rounded-md w-full focus:outline-none"
              placeholder="Enter your Order ID"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Track
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
