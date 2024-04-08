import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className='flex items-center justify-around mt-5 mb-5 relative px-5 '>
      <div>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ ease: 'linear', duration: 0.8, delay: 0.8 }}
          className='z-[-10] absolute '>
          <img
            src='https://i.ibb.co/wg1x771/leaf.png'
            alt=''
            className='w-[8rem] h-[8rem] rotate-45'
          />
        </motion.div>
        <p className='flex items-center text-4xl w-96 italic  font-Montserrat line-clamp-3'>
          We know Castor Oil. Learn how we can help you with our expertise.
        </p>
      </div>
      <div className='hidden md:block '>
        <button className='  mt-5 uppercase flex bg-white hover:bg-cyan-800 hover:text-white text-cyan-800 font-semibold  py-2 px-4 border border-cyan-500 transition-all ease-in-out delay-75 duration-75  rounded-full'>
          Get In Touch
        </button>
        <div className='hidden md:block absolute z-[-10] right-0 top-1'>
          <img
            src='https://i.ibb.co/pRHGY9N/parallax-right.webp'
            alt=''
            className='w-[10rem] h-[10rem]'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
