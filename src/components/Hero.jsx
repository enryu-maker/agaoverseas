/* eslint-disable no-unused-vars */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'linear', duration: 1, delay: 0.25 }}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwiper'>
          <SwiperSlide>
            <img
              src={
                'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
              alt=''
            />
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: 'linear', duration: 1, delay: 0.25 }}
              className='absolute top-56  left-10 right-10 flex flex-col items-center justify-center'>
              <p className='mt-5 md:text-4xl font-semibold text-center flex text-black drop-shadow-md '>
                <span className=' text-sky-500'>AGA</span> OVERSEAS PVT. LTD.
              </p>
              <motion.button
                animate={{
                  pathLength: [0, 0.75],
                  pathOffset: [0, 0.2],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'loop',
                }}
                className=' mt-5  bg-white uppercase bg-transparent hover:border-2 text-cyan-800 font-semibold hover:text-cyan-700 py-2 px-4 border border-cyan-500  rounded-full'>
                Our Story
              </motion.button>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='castor-oil-slide2.webp'
              alt=''
            />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: 'linear', duration: 0.8, delay: 0.8 }}
              className='absolute  left-10  top-44 '>
              <p className='mt-5 md:text-4xl font-light text-center text-black'>
                Comprehensive Range of Castor Oil Products for Diverse
                Industries
              </p>
              <motion.button
                animate={{
                  pathLength: [0, 0.75],
                  pathOffset: [0, 0.2],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'loop',
                }}
                className=' mt-5 md:flex  bg-white uppercase bg-transparent hover:border-2 text-cyan-800 font-semibold hover:text-cyan-700 py-2 px-4 border border-cyan-500  rounded-full'>
                Explore More
              </motion.button>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <img
              src='slider-3.webp'
              alt=''
            />
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: 'linear', duration: 1, delay: 1 }}
              className='absolute  left-10 top-44 '>
              <p className='mt-5 flex w-110  md:text-4xl font-light md:text-left text-black'>
                Paving a Sustainable Path in the Castor World
              </p>
              <motion.button
                animate={{
                  pathLength: [0, 0.75],
                  pathOffset: [0, 0.2],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'loop',
                }}
                className='  mt-5 md:flex bg-white hover:border-2 text-cyan-800 font-semibold hover:text-cyan-700 py-2 px-4 border border-cyan-500  rounded-full'>
                View Resources
              </motion.button>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Hero;
