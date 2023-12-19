
import React from 'react';
import { ClickButton } from './Buttons';

const CardsNeighbour = () => {
  return (
    <div className='bg-gradient-to-tr from-purple-950 via-pink-900 to-violet-950
                          p-2 w-full h-full  group hover:scale-105 hover:rounded-3xl group duration-500 overflow-hidden'>
            <div className='full; w-full h-full bg-black p-6 m-0  group-hover:rounded-2xl group groups duration-500 overflow-hidden'>
                <p className=" overflow-hidden whitespace-nowrap pb-2
                              text-sm sm:text-1xl md:text-2xl  text-white font-bold select-none">
                     &lt; We Code For You /&gt;
                </p>
                <div className='w-full h-1 rounded bg-gradient-to-r from-purple-900 via-pink-900 to-black'></div>
                <p className=" break-words text-sm sm:text-xl font-thin py-4 ">
                <span className='font-bold text-violet-900 text-3xl'>Xenture</span> brings over 7 years of experience in the FinTech sector, a solid track record, and enduring integration background in enterprise-grade projects to our client's disposal
                </p>
                <ClickButton/>
             </div>
            </div>
  )
}

export default CardsNeighbour
