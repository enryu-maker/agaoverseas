import React from 'react';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ContactForm = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div className='grid'>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <h1 className='md:text-xl font-Poppins font-light p-2 text-cyan-500'>
          We'd Love to Address Your Queries
        </h1>
        <form className='py-10'>
          <div className='grid md:grid-cols-2 gap-2'>
            <input
              type='text'
              placeholder='Name'
              className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400  focus:ring-opacity-50'
            />
            <input
              type='email'
              placeholder='Email'
              className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
            />
            <input
              type='text'
              placeholder='Subject'
              className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
            />
            <input
              type='text'
              placeholder='Location'
              className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
            />
          </div>
          <textarea
            placeholder='Message'
            className='w-full h-[100px] mt-5 p-2  border-none rounded bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
          />
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
            onClick={props.setModal}
            className=' mt-5 w-full bg-white uppercase bg-transparent  text-cyan-800 hover:bg-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-500 rounded-full'>
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
