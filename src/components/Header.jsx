import React, { useState } from 'react';
import { ProductsNavLinks, AboutNavLinks } from '../data';
import { NavLink } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { BsChevronCompactDown } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-center justify-between px-10 '>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        whileHover={{
          rotate: 60,
        }}
        className=' flex items-center p-2 uppercase  '>
        <NavLink to='/'>
          <img
            src={'Logo.png'}
            alt='Logo'
            className='w-16 h-16'
          />
        </NavLink>
      </motion.div>
      <div className='hidden md:flex  items-center gap-10 font-Montserrat font-light '>
        <NavLink
          className='headerLink'
          to='/'>
          Home
        </NavLink>
        <ul className='relative parent cursor-pointer flex items-center   '>
          <div className='headerLink flex items-center gap-2'>
            About
            <BsChevronCompactDown className=' font-light' />
          </div>

          <div className='absolute top-5 left-[-25px] flex gap-5 m-1  items-center justify-center flex-col w-[270px]  text-sm  p-1  hidden child bg-white	'>
            {AboutNavLinks.map((nav, index) => (
              <>
                <NavLink
                  key={index}
                  to={nav.path}
                  className='flex items-center mt-5 mb-5 headerLink font-medium'>
                  {nav.name}
                </NavLink>
                <hr />
              </>
            ))}
          </div>
        </ul>

        <ul className='relative parent cursor-pointer flex items-center   '>
          <div className='headerLink flex items-center gap-2'>
            Products
            <BsChevronCompactDown className=' font-light' />
          </div>

          <div className='absolute top-5 left-[-25px] flex gap-5 m-1  items-center justify-center flex-col w-[270px]  text-sm  p-1  hidden child bg-white	'>
            {ProductsNavLinks.map((nav, index) => (
              <>
                <NavLink
                  key={index}
                  to={nav.path}
                  className='flex items-center mt-5 mb-5 headerLink font-medium'>
                  {nav.name}
                </NavLink>
                <hr />
              </>
            ))}
          </div>
        </ul>
        <NavLink
          className='headerLink'
          to='/services'>
          Step Order
        </NavLink>
        <NavLink
          className='headerLink'
          to='/blog'>
          Blog
        </NavLink>
        <NavLink
          className='headerLink'
          to='/faq'>
          FAQ
        </NavLink>
        <NavLink
          className='headerLink'
          to='/contact'>
          Contact
        </NavLink>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          whileHover={{
            rotate: 60,
          }}
          className='flex items-center cursor-pointer border rounded-full border-cyan-400 hover:bg-[#19b8f1] '>
          <FaPaperPlane className='text-[#19b8f1] w-8 h-8 p-2 hover:text-white ' />
        </motion.div>
      </div>
      {/* mobile nav */}
      {isOpen && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5, delay: 0.5 }}
          className=' absolute p-10 flex flex-col  items-left  justify-center text-2xl top-0 right-0  w-full h-screen gap-5  bg-white z-50 '>
          <>
            <motion.button
              whileHover={{
                rotate: -90,
              }}
              whileTap={{ scale: 0.85 }}
              className='absolute top-10 right-10 '
              onClick={toggleNavbar}>
              <RxCross2 className='text-[#19b8f1]    ' />
            </motion.button>

            <NavLink
              className='headerLink'
              onClick={toggleNavbar}
              to='/'>
              Home
            </NavLink>
            <ul className='relative parent cursor-pointer flex items-center   '>
              <div className='headerLink flex items-center gap-2  justify-between'>
                About
                <BsChevronCompactDown className=' font-light' />
              </div>

              <div className='absolute z-10 top-5 left-[-25px] flex gap-5 m-1  items-center justify-center flex-col w-[270px]  text-sm  p-1  hidden child bg-white	'>
                {AboutNavLinks.map((nav, index) => (
                  <>
                    <NavLink
                      key={index}
                      to={nav.path}
                      onClick={toggleNavbar}
                      className='flex items-center mt-5 mb-5 headerLink text-lg font-medium'>
                      {nav.name}
                    </NavLink>
                    <hr />
                  </>
                ))}
              </div>
            </ul>

            <ul className='relative parent cursor-pointer flex items-center   '>
              <div className='headerLink flex items-center justify-between gap-2 '>
                <div>Products</div>
                <div>
                  <BsChevronCompactDown className=' font-light' />
                </div>
              </div>

              <div className='absolute  top-5 left-[-25px] flex gap-5 m-1  items-center justify-center flex-col w-[300px]  text-sm  p-1  hidden child bg-white	'>
                {ProductsNavLinks.map((nav, index) => (
                  <>
                    <NavLink
                      key={index}
                      to={nav.path}
                      onClick={toggleNavbar}
                      className='flex items-center mt-5 mb-5 headerLink text-lg font-medium'>
                      {nav.name}
                    </NavLink>
                    <hr />
                  </>
                ))}
              </div>
            </ul>
            <NavLink
              className='headerLink'
              onClick={toggleNavbar}
              to='/services'>
              Step Order
            </NavLink>
            <NavLink
              className='headerLink'
              onClick={toggleNavbar}
              to='/blog'>
              Blog
            </NavLink>
            <NavLink
              className='headerLink'
              onClick={toggleNavbar}
              to='/faq'>
              FAQ
            </NavLink>
            <NavLink
              className='headerLink'
              onClick={toggleNavbar}
              to='/contact'>
              Contact
            </NavLink>
          </>
        </motion.div>
      )}

      {/* Icons */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        className='md:hidden flex gap-2'>
        <div className='flex items-center cursor-pointer border rounded-full border-cyan-400 hover:bg-[#19b8f1] '>
          <FaPaperPlane className='text-[#19b8f1] w-8 h-8 p-2 hover:text-white ' />
        </div>
        <div className='flex items-center  '>
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <RxCross2 className='text-[#19b8f1] z-55 ' />
            ) : (
              <IoMenu className='text-[#19b8f1] w-8 h-8 p-2 z-10 hover:text-white border rounded-full border-cyan-400 hover:bg-[#19b8f1] ' />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
