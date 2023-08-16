import React from 'react';
import BannerImage from '../../Assets/banner.jpg';

const Hero = () => {
  return (
    <div className="w-full">
      <img
        src={BannerImage}
        alt="bannerimg"
        className="w-full h-26 object-cover"
        // Replace 'object-cover' with 'object-contain' if you want the entire image to be visible.
      />
    </div>
  );
};

export default Hero;
