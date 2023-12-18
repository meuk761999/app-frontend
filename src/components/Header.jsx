import React from 'react';
import Link from 'next/link';
import { ArrowDropDown } from '../../public/icons/Icons';

const Header = () => {
  return (
    <>
       {/* <div className=' h-8 bg-white'>

       </div> */}
<nav className="bg-gradient-to-r from-black via-violet-900 to-purple-900 fixed w-full z-50 ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        </div>
        <div className='w-full hidden sm:flex justify-center'>
          <div className='flex w-3/6 justify-around'>
            <div className='flex select-none hover:text-gray-400 transition ease-in-out duration-300'>
                <div className='h-full text-center' >
                <Link href="/" className=' underline'>Who we are </Link>
                </div>
                <div className='h-full w-8 flex items-center'>
                    <ArrowDropDown/>
                </div>
            </div>
            <div className='flex select-none hover:text-gray-400 transition ease-in-out duration-300'>
                <div className='h-full text-center' >
                <Link href="/" className=' underline'>Who we do </Link>
                </div>
                <div className='h-full w-8 flex items-center'>
                    <ArrowDropDown/>
                </div>
            </div>
            <div className='flex select-none hover:text-gray-400 transition ease-in-out duration-300'>
                <div className='h-full text-center' >
                <Link href="/" className=' underline'>Join Us</Link>
                </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-transparent p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  {/* Mobile menu, show/hide based on menu state. */}
  {/* <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link href="#" className="  text-white block rounded-md px-3 py-2 text-base font-medium underline" aria-current="page">What we do</Link>
      <Link href="#" className="text-gray-300 hover:bg-gray-300 bg-opacity-10 hover:text-white block rounded-md px-3 py-2 text-base font-medium underline">Who we are</Link>
      <Link href="#" className="text-gray-300 hover:bg-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium underline">Join Us</Link>

    </div>
  </div> */}
</nav>


    </>
  )
}

export default Header