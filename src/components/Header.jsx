import React, { useState } from 'react';
import { ProductsNavLinks } from '../data';
import { NavLink } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-center justify-around '>
      <div className=' flex items-center gap-5 p-2 uppercase text-3xl font-semibold font-Montserrat'>
        <NavLink to='/'>
          <img
            src={'Logo.png'}
            alt='Logo'
            className='w-16 h-16'
          />
        </NavLink>
        Aga Overseas
      </div>
      <div className='flex items-center gap-10 font-Montserrat font-light '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <ul className='relative parent cursor-pointer flex gap-10'>
          Products
          <div className='absolute top-5 left-[-25px] flex items-center justify-center flex-col w-[250px]  text-sm p-2  hidden child bg-red-400	'>
            {ProductsNavLinks.map((nav, index) => (
              <NavLink
                key={index}
                to={nav.path}
                className=''>
                {nav.name}
              </NavLink>
            ))}
          </div>
        </ul>
        <NavLink to='/services'>Step Order</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
        <NavLink to='/faq'>FAQ</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        {/* Icons */}
        <div className='flex items-center cursor-pointer'>
          <FaPaperPlane />
        </div>
        <div className='md:hidden flex items-center '>
          <button onClick={toggleNavbar}>
            {isOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
