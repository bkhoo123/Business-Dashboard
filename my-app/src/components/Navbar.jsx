"use client"
import React from 'react'

const Navbar = () => {
    return (
      <div className="flex-grow flex items-center h-[69px] border-b">
        <div className="relative ml-6">
          <input className="border-rose-400 border-2 p-1 pl-10 rounded-md w-full" 
          type="text" 
          placeholder="Search Tracking Number"
          
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute left-2 top-1/2 transform -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
          </svg>
        </div>
      </div>
    );
  };
  

export default Navbar