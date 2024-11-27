import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-auto md:h-[714px] p-4 md:p-0">
      <div>
        <div className=" h-auto md:h-[82px] flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20 space-y-4 md:space-y-0 ">
          <h1 className="font-semibold text-[18px] ml-0 md:ml-20 text-center md:text-left">
            Subscribe to our newsletter{" "}
            <p className="font-normal">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            </p>
          </h1>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <input
            className="w-full md:w-[265px] h-[48px] border-[1px] p-4 border-black rounded-[5px] md:ml-[540px] "
            type="text"
            placeholder="Enter your email"
          />
          <button className="w-full md:w-[119px] h-[49px] border-[1px] border-black rounded-[5px] md:mr-24">
            Subscribe
          </button>
        </div>
        </div>
        <div className="text-[12px] text-center md:text-right flex justify-center md:justify-end mt-4 md:mt-0 mr-0 md:mr-52 font-normal">
          By subscribing you agree to with our Privacy Policy
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start m-10 md:m-40 gap-10 md:gap-40">
        <div>
          <Image src={"/banner.png"} alt="logo" width={130} height={40} />
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="w-full md:w-[250px] space-y-4  ">
            <h1 className="text-[16px] font-semibold">Courses</h1>
            <ul className="text-[14px] space-y-5">
              <li>business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>

          <div className="w-full md:w-[250px] space-y-4">
            <h1 className="text-[16px] font-semibold">Resources</h1>
            <ul className="text-[14px] space-y-5">
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div className="w-full md:w-[250px] space-y-4">
            <h1 className="text-[16px] font-semibold">About Us</h1>
            <ul className="text-[14px] space-y-5">
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>
        
        <div>
        <div className="w-full md:w-[1120px] border-t border-black mx-auto mb-6"></div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-12 ml-0 md:ml-52">
          <h1 className="text-center md:text-left">2023 Ddsgnr. All Right reserved .</h1>
          <ul className="flex gap-4 ">
            <li>Privacy Policy</li>
            <li>Terms of service</li>
            <li>Cookies Settings</li>
          </ul>
          <Image className="ml-0 md:ml-72" src={"/foot.png"} alt="logo" height={24} width={132} />

        </div>

        </div>
    




    </div>
  );
};

export default Footer;




















































