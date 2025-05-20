
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

