import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Sarkari Job Portal</h1>

        {/* Hamburger Icon for mobile screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation Links - Initially hidden on small screens */}
        <ul className={`md:flex space-x-6 absolute md:static bg-blue-500 md:bg-transparent w-full md:w-auto top-16 left-0 z-10 md:z-auto md:top-auto md:left-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="text-center py-2 md:py-0"><a href="/" className="hover:text-gray-300">Home</a></li>
          <li className="text-center py-2 md:py-0"><a href="/latest-jobs" className="hover:text-gray-300">Latest Jobs</a></li>
          <li className="text-center py-2 md:py-0"><a href="/categories" className="hover:text-gray-300">Job Categories</a></li>
          <li className="text-center py-2 md:py-0"><a href="/admit-cards" className="hover:text-gray-300">Admit Cards</a></li>
          <li className="text-center py-2 md:py-0"><a href="/answer-keys" className="hover:text-gray-300">Answer Keys</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
