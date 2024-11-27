import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <>
      <div className=" flex justify-center  ">
        <div className=" w-full max-w-[768px] h-auto flex flex-col items-center justify-center m-4 md:m-14">
          <h1 className="font-bold text-[32px] md:text-[48px] text-center">Explore Courses by Category</h1>
          <p className="text-[16px] md:text-[18px] m-2 md:m-4 text-center">
            Discover a wide range of courses a variety of subjects, taught by
            expert instructors
          </p>
        </div>
      </div>

      <div>
        <div className=" w-full max-w-[1200px] py-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          <div className="bg-[#f7f7f7] auto-cols-fr">
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo1.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9 text-[20px]">
                Design & Development
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>

          <div className="bg-[#f7f7f7] ">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo2.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9 text-[20px]">
                Marketing
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>

          <div className="bg-[#f7f7f7]">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo3.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9 text-[20px]">
                Development
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/frame.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9 text-[20px]">
                Communication
                <p className="text-[18px] w-[250px] h[27px] flex font-normal  ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo5.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9 text-[20px]">
                Digital Marketing
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo6.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9 text-[20px]">
                Self Development
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo7.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9">
                Business
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo8.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9">
                Finance
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            {" "}
            <div className="flex flex-row p-[32px] justify-center items-center ">
              <Image
                className="rounded-[5px] ml-8"
                src={"/logo9.png"}
                alt="frame"
                height={100}
                width={100}
              />{" "}
              <h1 className=" flex flex-col font-semibold w-[246px] h-[20px] m-3 mb-9">
                Consulting
                <p className="text-[18px] w-[250px] h[27px] flex font-normal ">
                  50+ Courses Available
                </p>
              </h1>{" "}
            </div>
          </div>
            <button className="mx-auto mt-4 md:ml-[500px] h-[48px] w-[155px] rounded-[5px] border-[1px] text-[16px] border-black ">View All Courses</button>
        </div>
      </div>
    </>
  );
};

export default Category;









