import React from 'react'
import { ArrowRightTailed } from '../../public/icons/Icons'

export const ClickButton = ({link}) => {
  return (
    <>
      <button className={`flex px-2 border-2 hover:bg-gradient-to-tr  from-purple-950 to-violet-90`}>
        <p>Learn more</p>
        <div className=" px-2 h-6 w-6 flex items-center animate-oscillate">
          <ArrowRightTailed />
        </div>
      </button>
    </>
  );
}


