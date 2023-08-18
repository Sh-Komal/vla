// src/ProductSection.js

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchDataFromEndpoint } from "../../ApiConfig"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSection() {
  const [categoryData, setCategoryData] = useState([]);

  const navigate = useNavigate();

  const handleCardClick = (category) => {
    // Use the 'category' data or its ID to determine the desired route and operation
    if (category.Name === 'MS FLAT') {
      fetchDataFromEndpoint("/ms_flat_endpoint", "MSFlatOperation") // Fetch data from a new endpoint for MS FLAT
        .then((data) => {
          // Process the fetched data for MS FLAT
          // Navigate to the desired route
          navigate('/ms-flates');
        })
        .catch((error) => {
          console.error("Error fetching MS FLAT data:", error);
        });
    }

    if (category.Name === 'MS ROUND ') {
        navigate('/ms-round');
      }
      if (category.Name === 'MS FLAT') {
        navigate('/ms-flates');
      }
      if (category.Name === 'MS SQUARE') {
        navigate('/ms-square');
      }
      if (category.Name === 'MS CHANNEL') {
        navigate('/ms-channel');
      }
      if (category.Name === 'MS ANGLE') {
        navigate('/ms-angle');
      }
    
  };

  useEffect(() => {
    fetchDataFromEndpoint("/ims/api/opn_category.php", "OPNCategory") 
      .then((data) => {
        setCategoryData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []);

  const PrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      Next
    </button>
  );

  // Configuration options for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-green-50 overflow: hidden">
      <h1 className="text-2xl text-center font-bold my-4 py-5">OUR PRODUCTS</h1>
      <Slider {...carouselSettings}>
        {categoryData.map((category) => (
          <div key={category.RecordID} className="px-2">
            <button
              className="block rounded-lg h-full" 
              onClick={() => handleCardClick(category)} 
            >
              <div className="bg-white shadow-lg rounded-lg p-4 h-full"> {/* Add 'h-full' class here as well */}
                <h3 className="text-xl font-bold mb-2">{category.Name}</h3>
                <img src={category.Image} alt={category.Name} className="w-full h-48 object-cover mb-2" /> {/* Adjust the height as needed */}
               
              </div>
            </button>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ProductSection;