// components>/navbar.js
// This is the navbar component
'use client'


import { useState } from "react";
import { Menu, X} from "lucide-react";

export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 md:px-8 md:py-4 bg-opacity-60 z-10 pt-8 ">

      {/* This is logo */}
      
      <img src="/icon.svg" alt="Logo" className="w-fit cursor-pointer" href="/" />

      <img src="/headline.svg" className="hidden lg:block"/>

      {/* List of pages */}


      <ul className="space-x-8 backdrop-blur-2xl pt-12 pb-12 pr-4 pl-48 hidden md:flex">
        <li>
          
            <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white cursor-pointer" href="/">00 Home</a>
          
        </li>
        <li>
          
            <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white cursor-pointer" href="/destination">01 Destination</a>
         
        </li>
        <li>
         
            <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white cursor-pointer" href="/crew">02 Crew</a>
          
        </li>
        <li>
       
            <a className="text-white uppercase text-sm tracking-widest hover:border-b-2 hover:border-white cursor-pointer" href="/technology">03 Technology</a>
         
        </li>
      </ul>

      {/* Hamburger function for mobile */}

      <button className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
        
        
        {isOpen ? <X size={42}/> : <Menu size={42}/>}


      </button>

      {/* Mobile Menu */}

      {isOpen && (
        <ul className="md:hidden absolute top-20 left-40 w-full backdrop-blur-3xl flex flex-col items-start gap-10 py-8 z-20 pt-20 pl-10 pb-150">

          <li><a className="text-white uppercase text-sm tracking-widest cursor-pointer" href="/">00 Home</a></li>

          <li><a className="text-white uppercase text-sm tracking-widest cursor-pointer" href="/destination">01 Destination</a></li>

          <li><a className="text-white uppercase text-sm tracking-widest cursor-pointer" href="/crew">02 Crew</a></li>

          <li><a className="text-white uppercase text-sm tracking-widest cursor-pointer" href="/technology">03 Technology</a></li>

        </ul>
      )}

      
    </nav>

    
  );
}

