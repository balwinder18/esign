'use client'

import { useState } from 'react';
import Navbar from '../app/components/Navbar'
import Whiteboard from './components/Whiteboard'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Select text size');

  const textSizes = ['1', '2', '3', '4', '5'];
  return (
    <div className='h-[100vh]' id="homepage">
      <div className='h-[8vh]' id="navbar">
        <Navbar/>
      </div>
       
       <div className='h-[92vh] w-full' id="main">
        <div className='h-[5vh] bg-[#14fca9]' id="top"></div>
          <div className='flex'>
          <div className='w-1/5 bg-black h-[87vh] text-white flex items-center flex-col' id="left">
           <h1>Choose</h1>
            <div className='m-3 bg-white h-[80vh] w-1/2 rounded-lg flex flex-col items-center '>
            <div className="w-[5vh] h-[5vh] bg-black rounded-full mt-2"></div>
            <div className="relative inline-block text-left mt-3">
      {/* Dropdown Button */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {selectedSize}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {textSizes.map((size) => (
              <a
                key={size}
                onClick={() => {
                  setSelectedSize(`Text size ${size}`);
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              >
                Text size {size}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
            </div>
             
          </div>
            <div className='h-full w-4/5 bg-[#dadada] flex items-center flex-col' id="right">
             board

             <div id="board" className='m-5 bg-white h-[80vh] w-[120vh] w- rounded-lg'>
              <Whiteboard/>
             </div>
            </div>
            </div>
          </div>
       </div>
  
  );
}
