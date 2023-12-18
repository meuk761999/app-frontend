import React from "react";
import Image from "next/image";
import { ClickButton } from "./Buttons";
const Banner = () => {
  return (
    <div>
      <div className="w-full p-10x  group hover:scale-95 hover:rounded-3xl group groups duration-500 overflow-hidden">
        <div className="relative group z-0 overflow-hidden">
        <div className="absolute z-10 h-0 w-0 duration-500 group-hover:w-full group-hover:h-full group-hover:scale-150
                        group-hover:top-0 group-hover:right-0 opacity-0 group-hover:opacity-70 rounded-full bg-gradient-to-tr from-violet-900 via-black to-purple-900 top-1/2 right-1/2 origin-center">

        </div>
        <div className=" p-6 absolute z-20 duration-500 h-full bg-transparent">
        <div className="text-6xl max-w-min duration-100 group-hover:border-4 p-2 border-b-transparent border-r-transparent border-l-red-900 border-t-pink-900 ">
          <div className="text-6xl w-full duration-200 group-hover:border-4  p-2 border-b-transparent border-r-transparent border-l-pink-900 border-t-red-900">
            <div className="text-6xl w-full duration-300 group-hover:border-4  border-b-transparent border-r-transparent border-l-red-900 border-t-pink-900 ">
                Reinvent Your Business
           </div>
          </div>
        </div>
        <div><ClickButton/></div>
        </div>
          <div className="relative z-0 w-full h-full border-geen-700">
            <Image
              src="/images/Women-Banner-Image-crop.jpg"
              alt="My image"
              width={6016}
              height={2850}
            />
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
