import React from "react";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#212121] h-[5svh] flex items-center justify-between px-8 lg:px-20">
      <div className="flex gap-2 items-center">
        <FaInstagram color="white" size={18} />
        <ImFacebook2 color="white" size={16} />
        <FaTwitter color="white" size={18} />
      </div>
      <h2 className="text-white text-center text-xs tracking-wide">
        Leather Watch Straps & Co
      </h2>
    </div>
  );
};

export default AnnouncementBar;
