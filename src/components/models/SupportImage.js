import React from "react";
import supportImage from '../../Assets/support_image.png'; // Replace with the path to your support image

const SupportImage = () => {
  return (
    <div className="w-full h-full">
      <img src={supportImage} alt="Support" className="w-full h-full object-cover" />
    </div>
  );
};

export default SupportImage;
