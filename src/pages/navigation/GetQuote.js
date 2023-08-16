import React from "react";

const GetQuote = () => {
  return (
    <div className="container py-7 border-full md:mx-7">
      <h1 className="text-center text-sky-900 font-bold text-3xl mb-4">
        Tell Us Your Preferences
      </h1>
      <p className="text-3xl">Delivery Location</p>
      <div className="flex flex-col md:flex-row md:gap-12">
        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-full my-4 px-4 py-2 md:w-1/3"
        />
        <input
          type="text"
          placeholder="Email-id"
          className="border rounded-full my-4 px-4 py-2 md:w-1/3"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border rounded-full my-4 px-4 py-2 md:w-1/3"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-12">
        <input
          type="text"
          placeholder="City"
          className="border rounded-full my-4 px-4 py-2 md:w-1/3"
        />
        <select
          className="border rounded-full my-4 px-4 py-2 md:w-1/3"
          defaultValue=""
        >
          <option value="" disabled>
            Select State
          </option>
          <option value="state1">Haryana</option>
          <option value="state2">Punjab</option>
          <option value="state2">Delhi</option>
          <option value="state2">Rajasthan</option>
          <option value="state2">UP</option>
          <option value="state2">Bihar</option>
          <option value="state2">Goa</option>
          <option value="state2">West-Bengal</option>
          <option value="state2">Chandigarh</option>
          
          {/* Add more state options as needed */}
        </select>
        <input
          type="text"
          placeholder="Pincode"
          className="border rounded-full my-4 px-4 py-2 md:w-1/3"
        />
      </div>

      <div className="container bg-white-50 py-7 border-full md:mx-7 mt-6">
        <p className="text-3xl">Product Details</p>
        <div className="flex flex-col md:flex-row md:gap-12">
          <select
            className="border rounded-full my-4 px-4 py-2 md:w-1/3"
            defaultValue=""
          >
            <option value="" disabled>
              Select Product
            </option>
            <option value="product1">Counstruction Steel</option>
            <option value="product2">Product 2</option>
            <option value="product2">Product 2</option>
            <option value="product2">Product 2</option>
            {/* Add more product options as needed */}
          </select>
          <input
            type="text"
            placeholder="Select Brand"
            className="border rounded-full my-4 px-4 py-2 md:w-1/3"
          />
          <input
            type="text"
            placeholder="Select Grade"
            className="border rounded-full my-4 px-4 py-2 md:w-1/3"
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-12">
          <input
            type="text"
            placeholder="Select Size"
            className="border rounded-full my-4 px-4 py-2 md:w-1/3"
          />
          <input
            type="text"
            placeholder="Quantity"
            className="border rounded-full my-4 px-4 py-2 md:w-1/3"
          />
          <select
            className="border rounded-full my-4 px-4 py-2 md:w-1/3"
            defaultValue=""
          >
            <option value="" disabled>
              Select Payment
            </option>
            <option value="payment1">Payment 1</option>
            <option value="payment2">Payment 2</option>
            {/* Add more payment options as needed */}
          </select>
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="bg-sky-900 text-white py-2 px-6 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetQuote;
