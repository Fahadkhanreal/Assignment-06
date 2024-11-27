import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="h-auto bg-[#f7f7f7] pt-10 md:pt-40">
      <div className="px-4 md:px-0">
        <div className="w-full md:w-[560px] h-auto md:h-[109px] mx-auto md:ml-40 text-center md:text-left ">
          <h1 className="text-[32px] md:text-[48px] font-bold mb-4">Customer testimonials</h1>
          <p className="text-[16px] md:text-[18px]">
            Lorem ipsum sit amet, consecteur adipiscing elit
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 m-10 md:m-20">
          <div className="w-full md:w-[362px] h-auto md:h-[321px] border-[1px] border-black bg-[#f7f7f7] p-4">
            <Image
              className="m-5"
              src={"/stars.png"}
              alt="logo"
              width={116}
              height={18}
            />
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>

            <div className="flex mt-8 items-center">
              <Image
                className="rounded-[100px] m-4 "
                src={"/p3.png"}
                alt="logo"
                height={56}
                width={56}
              />

              <h1 className="mt-4">
                James Niduku
                <p>Software Developer</p>
              </h1>
            </div>
          </div>

          <div className="w-full md:w-[362px] h-auto md:h-[321px] border-[1px] border-black bg-[#f7f7f7] p-4">
            <Image
              className="m-5"
              src={"/stars.png"}
              alt="logo"
              width={116}
              height={18}
            />
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare
            </p>
            <div className="flex mt-8 items-center">
              <Image
                className="rounded-[100px] m-4 "
                src={"/p1.png"}
                alt="logo"
                height={56}
                width={56}
              />

              <h1 className="mt-4">
                Erick Kipkemboi
                <p>Scrum Master</p>
              </h1>
            </div>
          </div>
          <div className="w-full md:w-[362px] h-auto md:h-[321px] border-[1px] border-black bg-[#f7f7f7] p-4">
            <Image
              className="m-5"
              src={"/stars.png"}
              alt="logo"
              width={116}
              height={18}
            />
            <p className="m-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="flex mt-8 items-center">
              <Image
                className="rounded-[100px] m-4  "
                src={"/p6.png"}
                alt="logo"
                height={56}
                width={56}
              />

              <h1 className="mt-4">
                Stephen Kerubo
                <p>UI/UX Designer</p>
              </h1>
            </div>
          </div>
        </div>
        <span className="flex   mr-24 ">
          <Image
            className=" ml-0 md:ml-40 mb-12  "
            src={"/dots.png"}
            alt="logo"
            width={72}
            height={8}
          />

          <Image
            className="ml-auto md:ml-[900px] pb-2 "
            src={"/button.png"}
            alt="logo"
            width={111}
            height={48}
          />
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
































