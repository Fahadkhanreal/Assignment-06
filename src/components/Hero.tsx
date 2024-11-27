import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className=" flex flex-col w-full md:w-[50%] justify-center items-center p-4 md:p-0 ">
          <h1 className="w-full md:w-[580px] font-bold text-[32px] md:text-[56px] text-center md:text-left">Learn new skills online with ease</h1>
          
          
          <p className="w-full md:w-[580px] text-[16px] md:text-[18px] text-center md:text-left mt-4">
            Discover a wide range of courses covering a variety of
            subjects,taught by expert instructors
          </p>
          
          
          <div className="flex flex-col md:flex-row gap-[16px] w-full md:w-[358px] mt-6 md:mr-60 ">
          <button className=" border-[1px] border-black w-full md:w-[178px] h-[48px] rounded-[5px] bg-black text-white  ">Start Learning now</button>
          <button className="border-[1px] border-black w-full md:w-[164px] h-[48px] rounded-[5px] mt-4 md:mt-0" >Explore Courses</button>
          </div>
        
        </div>
        
        
        <div className="flex justify-center md:justify-end w-full md:w-[50%] mt-6 md:mt-0" > 
            <Image   src={"/pic.png"} alt="image" height={900} width={640}/>
            
            
            
              </div>
      </div>

      <div className=" flex flex-col md:flex-row h-auto md:h-[228px] bg-[#f7f7f7] p-4 md:p-0  ">
        <h1 className="w-full md:w-[320px] h-auto md:h-[68px] font-bold text-[20px] md:text-[24px] mt-4 md:mt-20 text-center md:text-left" >Trusted by 2000+ companies worldwide</h1>
        <div className="flex justify-center md:justify-start w-full md:w-auto mt-4 md:mt-0">
        <Image className="p-20 ml-96" src={"/Logos.png"} alt="label" height={56} width={880}/>
            
        </div>
        
      </div>
    </>
  );
};

export default Hero;

