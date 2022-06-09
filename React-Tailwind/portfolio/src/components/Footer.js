import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="h-44 md:h-24 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2a2a"
            fill-opacity="1"
            d="M0,160L0,0L288,0L288,96L576,96L576,0L864,0L864,160L1152,160L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-theme flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 font-merri text-center">
            <p className="text-gray-50 pb-5">Designed and Developed by</p>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>
            <div className="flex text-white w-full justify-between py-3">
              <FaFacebook />
              <FaMailBulk />
              <FaInstagram />
              <FaLinkedin />
              <FaGithub />
            </div>
            <div className="h-1 border-2 border-gray-50 border-dotted"></div>
            <p className="text-gray-50 my-3">Tolorunju Tayo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
