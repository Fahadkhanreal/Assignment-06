import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div>
      <div className="flex flex-col sm:flex-row justify-between border-b-[1px] border-black h-auto sm:h-[54px] px-4 sm:px-[64px] bg-[#F7F7F7] ">
        
        <div className="flex flex-col sm:flex-row pt-4 pb-4 sm:pb-[32px] gap-4 sm:gap-32 ">
          <div className="flex h-[30px] gap-4 sm:gap-16px">
            Phone Number : 956 742 455 678 | Email:info@ddsgnr.com
          </div>
          <div className="flex w-full sm:w-[736px] h-24 gap-4 sm:gap-12 justify-end ml-0 sm:ml-20 ">
            <FaFacebookF />
            <FiInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>


<div className="flex flex-col sm:flex-row justify-between border-b-[1px] border-black h-auto sm:h-[54px] px-4 sm:px-[64px] bg-[#F7F7F7]">
<Image src={"/banner.png"} alt="Logo" width={131} height={41} className=" pt-2 mb-2" />
    <div className="flex flex-col sm:flex-row h-auto sm:h-44 gap-4 sm:gap-8 mt-4 sm:mt-0">
      <div className="bg-white h-auto sm:h-10 pt-2 mt-2">
      <ul className=" flex flex-col sm:flex-row gap-4 sm:gap-10 ">
        <li>Home</li>
        <li>Courses</li>
        <li>Services</li>
        <li>Achievement</li>
        <li>About Us</li>
        <li>Testimonial</li>
      </ul>
      </div>

      <div className="flex gap-4 sm:gap-8 mt-4 pt-2 sm:mt-0">
      
      <button className=" border-[1px] border-black h-[40px] w-[80px] rounded-[5px]  ">Login</button>
      <button className=" border-[1px] border-black h-[40px] w-[95px] bg-black text-white rounded-[5px]">Sign Up</button>
      </div>
      </div>
      </div>
      
    
 


    </>
  );
};

export default Header;

