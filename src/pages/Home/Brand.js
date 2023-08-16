import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brand1 from "../../Image/brand1.png";
import brand2 from "../../Image/brand2.png";
import brand3 from "../../Image/brand3.png";
import brand4 from "../../Image/brand4.png";
import brand5 from "../../Image/brand5.png";
import brand6 from "../../Image/brand6.png";
import brand7 from "../../Image/brand7.png";
import brand8 from "../../Image/brand8.png";
import brand9 from "../../Image/brand9.jpg";

const Brand = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 5,
    },
  };

  // Duplicate the items to make the carousel endless
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9];
  const endlessBrands = [...brands, ...brands];

  return (
    <div className="MainBox bg-sky-500 pt-4 pb-4">
      <div className="heading py-12 text-center">
        <h1 className="text-3xl font-bold">OUR BRANDS</h1>
        <p>We proudly deliver the Best Products from the Best Brands</p>
      </div>
      <div className="carousel-container  relative">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true} // Enable infinite loop
          autoPlay={true}
          autoPlaySpeed={5000} // Set the time (in milliseconds) for each slide
          swipeable={true}
          dynamicHeight={true}
          centerMode={true}
          centerSlidePercentage={100}
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {endlessBrands.map((brand, index) => (
            <div key={index} className="relative p-2">
              <img src={brand} alt={`logo${index + 1}`} className="w-full h-full" />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
                <img src={brand} alt={`logo${index + 1}`} className="w-full h-full" />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Brand;
