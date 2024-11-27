import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div>
      <div className="h-[118px] flex flex-col items-center">
        <h1 className="text-[67.2px] font-bold mb-2">Courses</h1>
        <p className="text-[18px] ">Your Ultimate Guide to Learning</p>
      </div>

      <div>
        <ul className="flex justify-center mt-20 h-[40px] gap-8 text-[16px]">
          <li className="underline">Popular</li>
          <li>Recommended</li>
          <li>Best Price</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-[1200px] mx-auto gap-10 mt-1 px-4">
        <div>
          <Image src={"/card.png"} alt="logo" height={300} width={416} />
          <div className="bg-[#f7f7f7] p-4">
            <h3 className="text-[14px]">Design</h3>
            <h1 className="text-[24px] font-bold mt-2 ">UX/UI Design 210</h1>
            <p className="text-[16px] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipising elit.suspendisse
              verius enim eros
            </p>
            <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black mt-4">
              Enroll Now
            </button>{" "}
            <span className="ml-6"> $400</span>
          </div>
        </div>

        <div>
          <div>
            <Image src={"/card1.png"} alt="logo" height={300} width={416} />
            <div className="bg-[#f7f7f7] p-4">
              <h3 className="text-[14px]">Programming</h3>
              <h1 className="text-[24px] font-bold mt-2 ">Introduction to Python</h1>
              <p className="text-[16px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipising
                elit.suspendisse verius enim eros
              </p>
              <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black mt-4">
                Enroll Now
              </button>{" "}
              <span className="ml-6"> $400</span>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Image src={"/card2.png"} alt="logo" height={300} width={416} />
            <div className="bg-[#f7f7f7] p-4">
              <h3 className="text-[14px]">Business</h3>
              <h1 className="text-[24px] font-bold mt-2 ">Data Analysis for Beginners</h1>
              <p className="text-[16px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipising
                elit.suspendisse verius enim eros
              </p>
              <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black mt-4">
                Enroll Now
              </button>{" "}
              <span className="ml-6"> $400</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={"/card3.png"} alt="logo" height={300} width={416} />
            <div className="bg-[#f7f7f7] p-4">
              <h3 className="text-[14px]">Art</h3>
              <h1 className="text-[24px] font-bold mt-2 ">Art Specialization</h1>
              <p className="text-[16px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipising
                elit.suspendisse verius enim eros
              </p>
              <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black mt-4">
                Enroll Now
              </button>{" "}
              <span className="ml-6"> $400</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={"/card4.png"} alt="logo" height={300} width={416} />
            <div className="bg-[#f7f7f7] p-4">
              <h3 className="text-[14px]">Law</h3>
              <h1 className="text-[24px] font-bold mt-2 ">Rule of Law</h1>
              <p className="text-[16px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipising
                elit.suspendisse verius enim eros
              </p>
              <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black mt-4">
                Enroll Now
              </button>{" "}
              <span className="ml-6"> $400</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={"/card5.png"} alt="logo" height={300} width={416} />
            <div className="bg-[#f7f7f7] p-4">
              <h3 className="text-[14px]">Tech</h3>
              <h1 className="text-[24px] font-bold mt-2 ">Introduction to Webflow</h1>
              <p className="text-[16px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipising
                elit.suspendisse verius enim eros
              </p>
              <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black mt-4">
                Enroll Now
              </button>{" "}
              <span className="ml-6"> $400</span>
            </div>
          </div>
        </div>
          
      </div>
    <div className="flex justify-center"><button className="mt-10 h-[40px] rounded-[5px]  w-[152px] border-[1px] border-black">view all courses</button></div>

    </div>
  );
};

export default Card;




