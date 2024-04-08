import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Service = () => {
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
      className=' flex flex-col  gap-5 items-center justify-center '>
      <h1 className='text-2xl font-Noto font-light p-2 text-cyan-500'>
        Transparent Procedure And Steps For Order
      </h1>
      <img
        src='order  .png'
        alt=''
        className='w-full h-screen'
      />
    </motion.div>
  );
};

export default Service;
