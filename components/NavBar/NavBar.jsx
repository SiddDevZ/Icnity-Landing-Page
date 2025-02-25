'use client'
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('top');
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollDirection('top');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Lock/unlock body scroll when menu is open/closed
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Full-width background container */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrollDirection === 'down'
            ? '-translate-y-full'
            : 'translate-y-0'
        }`}
      >
        <div
          className={`${
            scrollDirection === 'up' ? 'bg-[#151414e6] backdrop-blur-md pb-5' : ''
          }`}
        >
          {/* Centered content container */}
          <nav className="flex max-w-[77rem] mx-auto items-center justify-between pt-6 text-white px-4 md:px-6 z-50">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white cursor-pointer to-[#767585] text-2xl md:text-3xl font-inter font-semibold transition-all duration-300 hover:scale-105">
              ICNITY
            </h1>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Page', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#dfe2e7] text-sm sm:text-base font-pop hover:text-[#f5f5f6] transition-colors duration-300 relative group uppercase"
                  >
                    {item}
                    <span className="absolute left-0 right-0 bottom-[-1px] h-[1.3px] bg-[#ebecef] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>

            <button className="hidden md:block rounded-full h-[2.85rem] px-7 text-[#4169E1] bg-[#00a2ff2a] hover:bg-[#00a2ff32] transition-all duration-300 ease-in-out transform hover:scale-[1.035] hover:shadow-[0_0_15px_rgba(65,105,225,0.2)] text-lg">
              Get Started
            </button>

            {/* Hamburger Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center space-y-1.5 w-8 h-8 z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-[#171717] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-end mb-8">
            <button
              onClick={closeMenu}
              className="text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col space-y-6 mt-8">
            {['Home', 'About', 'Services', 'Page', 'Contact'].map((item) => (
              <li key={item} className="border-b border-gray-800 pb-4">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#dfe2e7] text-xl font-pop hover:text-[#f5f5f6] transition-colors duration-300 uppercase flex items-center"
                  onClick={closeMenu}
                >
                  {item}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <button className="mt-auto rounded-full py-3 px-7 text-white bg-[#00A3FF] hover:bg-[#0084d6] transition-all duration-300 ease-in-out text-lg font-medium mb-10">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
