import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between pt-6 text-white'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-white cursor-pointer to-[#767585] text-3xl font-inter font-semibold transition-all duration-300 hover:scale-105'>
        ICNITY
      </h1>
      
      <ul className='flex space-x-8'>
        {['Home', 'About', 'Services', 'Page', 'Contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-[#dfe2e7] text-sm sm:text-base font-medium hover:text-[#f5f5f6] transition-colors duration-300 relative group uppercase"
            >
              {item}
              <span className="absolute left-0 right-0 bottom-[-1px] h-[1.3px] bg-[#ebecef] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </li>
        ))}
      </ul>
      
      <button className="rounded-full h-[2.85rem] px-7 text-[#00A3FF] dark:text-[#4169E1] bg-[#00A3FF] dark:bg-[#00a2ff2a] hover:bg-[#00a2ff32] transition-all duration-300 ease-in-out transform hover:scale-[1.035] hover:shadow-[0_0_15px_rgba(0,163,255,0.2)] dark:hover:shadow-[0_0_15px_rgba(65,105,225,0.2)] text-lg">
        Get Started
      </button>
    </nav>
  )
}

export default NavBar