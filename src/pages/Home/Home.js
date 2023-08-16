import React from "react";

import ProductSection from "./ProductSection";


import Icons from "./Icons";
import WhySteelOnCall from "./WhySteel";
import Testimonial from "./Testimonials";
import NewsLetter from "./NewsLetter";
import Hero from "./Hero";


const Home = () => {
  return (
    <div>
     
     <Hero/>
      <Icons />
      <ProductSection />
      <WhySteelOnCall />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default Home;
