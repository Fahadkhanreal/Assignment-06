import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen mt-32 ">
      <div className="flex flex-col items-center mx-4 md:mx-40 ">
        <h1 className="font-bold text-[36px] md:text-[48px]">Our Team</h1>
        <p className="text-[16px] md:text-[18px] text-center">
          Lorem ipsum dolor sit amet,consectetur adipiscing elit
        </p>








        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mx-auto py-5 mt-10 md:mt-20    ">
        
        <div className="p-10">
          <Image
            className="ml-12 mt-4"
            src={"/p1.png"}
            alt="person"
            height={80}
            width={80}
          />
          <h1 className="text-[18px] md:text-[20px] font-semibold mt-4 pl-6  ">James Nduku</h1>
          <p className=" text-[16px] md:text-[18px]  ">Marketing Coordinator</p>
          <Image
            className="ml-8 mt-6"
            src={"/icon1.png"}
            alt="icon"
            height={24}
            width={100}
          />
        </div>

        <div className="p-10">
          <Image
            className="ml-12 mt-4"
            src={"/p2.png"}
            alt="person"
            height={80}
            width={80}
          />
          <h1 className="text-[18px] md:text-[20px] font-semibold mt-4 ">Joseph Munyambu</h1>
          <p className="text-[16px] md:text-[18px] pl-4  ">Nursing Assistant</p>
          <Image
            className="ml-8 mt-6"
            src={"/icon1.png"}
            alt="icon"
            height={24}
            width={100}
          />
        </div>
        <div className="p-10"> 
          <Image
            className="ml-12 mt-4"
            src={"/p3.png"}
            alt="person"
            height={80}
            width={80}
          />
          <h1 className="text-[18px] md:text-[20px] font-semibold mt-4 pl-4 ">Joseph Ngumbau</h1>
          <p className=" text-[16px] md:text-[18px] pl-6 ">Medical Assistant</p>
          <Image
            className="ml-10 mt-6"
            src={"/icon1.png"}
            alt="icon"
            height={24}
            width={100}
          />
        </div>
        <div className="p-10">
          <Image
            className="ml-12 mt-4"
            src={"/p4.png"}
            alt="person"
            height={80}
            width={80}
          />
          <h1 className="text-[18px] md:text-[20px] font-semibold mt-4 pl-4 ">Erick Kipkemboi</h1>
          <p className="text-[16px] md:text-[18px] ">Marketing Coordinator</p>
          <Image
            className="ml-8 mt-6"
            src={"/icon1.png"}
            alt="icon"
            height={24}
            width={100}
          />
        </div>
        <div className="p-10">
          <Image
            className="ml-12 mt-4"
            src={"/p5.png"}
            alt="person"
            height={80}
            width={80}
          />
          <h1 className=" text-[18px] md:text-[20px] font-semibold mt-4 pl-4">Stephen Kerubo</h1>
          <p className="text-[16px] md:text-[18px] pl-4">President of Sales</p>
          <Image
            className="ml-8 mt-6"
            src={"/icon1.png"}
            alt="icon"
            height={24}
            width={100}
          />
        </div>
        <div className="p-10">
          <Image
            className="ml-12 mt-4"
            src={"/p6.png"}
            alt="person"
            height={80}
            width={80}
          />
          <h1 className="text-[18px] md:text-[20px] font-semibold mt-4 pl-8 ">John Leboo</h1>
          <p className="text-[16px] md:text-[18px] pl-10 ">Dog Trainer</p>
          <Image
            className="ml-10 mt-4"
            src={"/icon1.png"}
            alt="icon"
            height={24}
            width={100}
          />
        </div>
      </div>
    </div>

        
      </div>

  );
};

export default Team;
