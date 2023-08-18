import React from "react";
import Slider from "react-slick";
import {
  FaTruck,
  FaRedoAlt,
  FaCertificate,
  FaCheckCircle,
  FaMoneyBill,
  FaBook,
  FaClipboardList,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Icons = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show only 1 item on mobile
        },
      },
    ],
  };

  return (
    <section className="hero-section bg-green-70 py-10 my-0 mt-20">
      <div className="container">
        <Slider {...settings}>
        <div className="text-center p-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-teal-500">
                <FaTruck size={40} />
              </span>
              <p className="text-gray-700 font-bold mt-2">Hassle Free Delivery</p>
            </div>
            </div>
          
            <div className="text-center p-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-teal-500">
                <FaRedoAlt size ={40} />
              </span>
              <p className="text-gray-700 font-bold mt-2">Easy Refund Policy</p>
            </div>
            </div>
            <div className="text-center p-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-teal-500">
                <FaCertificate size={40} />
              </span>
              <p className="text-gray-700 font-bold mt-2">Get Quality Certificate</p>
            </div>
            </div>
            <div className="text-center p-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-teal-500">
                <FaCheckCircle size={40} />
              </span>
              <p className="text-gray-700 font-bold mt-2">Verified Suppliers</p>
            </div>
            </div>
            <div className="text-center p-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-teal-500">
                <FaMoneyBill size={40} />
              </span>
              <span className="text-sky-900 text-xl">4000+</span>
              <p className="text-gray-700 font-bold mt-2">Million Turnover</p>
            </div>
            </div>
            <div className="text-center p-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-teal-500 ">
                <FaBook size={40} />
              </span>
              <span className="text-sky-900 text-xl">1000+</span>
              <p className="text-gray-700 font-bold mt-2">Steel Catalogues</p>
            </div>
          </div>
          <div className="text-center p-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl text-teal-500 ">
                <FaClipboardList size={40} />
              </span>
              <span className="text-sky-900 text-xl">6180+</span>
              <p className="text-gray-700 font-bold mt-2">Orders Processed</p>
            </div>
          </div>
        
        </Slider>
      </div>
    </section>
  );
};

export default Icons;
