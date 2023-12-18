import React from 'react';
import Image from "next/image";
const Cards = () => {
  return (<div>
    <div className="w-full p-10x  group hover:scale-105 hover:rounded-3xl group groups duration-500 overflow-hidden">
      <div className="relative group z-0 overflow-hidden">
      <div className="absolute z-10 h-0 w-0 duration-500 group-hover:w-full group-hover:h-full group-hover:scale-150
                      group-hover:top-0 group-hover:right-0 opacity-0 group-hover:opacity-70 rounded-full bg-gradient-to-tr from-violet-900 via-black to-purple-900 top-1/2 right-1/2 origin-center">

      </div>
      <div className=" p-6 absolute z-20 duration-500 w-full h-full bg-transparent">
      Hello World
      </div>
        <div className="relative z-0 w-full h-full border-geen-700">
          <Image
            src="/images/mac.jpg"
            alt="My image"
            width={3456}
            height={3456}
          />
       
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards
