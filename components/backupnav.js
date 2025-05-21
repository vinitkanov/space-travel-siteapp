
'use client'

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 flex items-center justify-between px-8 py-4 bg-opacity-60 z-10 pt-12">
      <img src="/logo.svg" alt="Logo" className="h-8" />

      {/* Hamburger Button (visible on mobile) */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu Links */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-opacity-90 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 backdrop-blur-sm \
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex md:flex-row md:space-y-0 md:space-x-8 md:h-auto md:bg-transparent md:backdrop-blur-none`}
      >
        {
        
        
        ['00 Home', 
        '01 Destination', 
        '02 Crew', 
        '03 Technology'

      ].map((label) => (
          <li key={label}>
            <a
              className="uppercase text-sm tracking-widest hover:border-b-2 hover:border-current"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}




// DESTINATION

export default function (){
    return (
        <section>

            <div className="flex-col justify-center h-screen pt-38 lg:flex-row">

            <div className="flex gap-4 justify-center md:justify-start md:pl-20 md:pt-18">

            <h1 className="text-gray-500 font-bellefair font-bold">
                01 
            </h1>
            <h1>
                PICK YOUR DESTINATION
            </h1>

            </div>

            <div className="lg:flex justify-center ">

            <div className="flex justify-center mt-10">
            <img src="/destination-moon.png" alt="moon" />
            
            </div>
 

            <div className="lg:max-w-lg">
            <div className="flex justify-center mt-10 gap-4">
                <h1 className="cursor-pointer">MOON</h1>
                <h1 className="cursor-pointer">MARS</h1>
                <h1 className="cursor-pointer">EUROPA</h1>
                <h1 className="cursor-pointer">TITAN</h1>
            </div>

            <div className="mt-10 text-center">
                <h1 className="text-6xl pb-4">MOON</h1>
                
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                
            </div>

            <div className="lg:hidden justify-center h-px bg-gray-300 my-4" />

            <div className="md:flex md:justify-center md:gap-32 md:mt-10">
                <div>
                    <h1 className="text-center">AVG. DISTANCE</h1>
                    <h2 className="text-4xl text-center">384,400 km</h2>
                </div>
                <div>
                    <h1 className="text-center">Est. travel time</h1>
                    <h2 className="text-4xl text-center">3 days</h2>
                </div>
            </div></div>
            </div></div>

        </section>
    )
}
