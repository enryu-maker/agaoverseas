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
          <img src={'Logo.png'} alt='Logo' className='w-16 h-16' />
        </NavLink>
        Aga Overseas
      </div>
      <div className='flex items-center gap-10 font-Montserrat font-light '>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <ul className='relative parent cursor-pointer'>
          Products
          <div className='absolute flex flex-col w-[300px] gap-5 mt-2 hidden child'>
            {ProductsNavLinks.map((nav) => (
              <li className='flex '>{nav.name}</li>
            ))}
          </div>
        </ul>
        <NavLink>Step Order</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>FAQ</NavLink>
        <NavLink>Contact</NavLink>
        {/* Icons */}
        <div className='flex items-center'>
          <FaPaperPlane />
        </div>
        <div className='flex items-center'>
          <button onClick={toggleNavbar}>
            {isOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
