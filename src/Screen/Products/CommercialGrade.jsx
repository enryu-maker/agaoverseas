import React from 'react';
import Banner from '../../components/Banner';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const CommercialGrade = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='md:flex items-center font-Poppins justify-around md:p-10 md:gap-20'>
        <div className='p-10 relative'>
          <img
            src='https://www.ambujasolvex.com/ast/uploads/2021/06/brown-castor-oil.webp'
            alt=''
            className='rounded-lg '
          />
          <img
            src='https://i.ibb.co/1Xqg3v6/leaf-back.png'
            alt=''
            className='absolute right-0 top-20 md:top-96 w-24 h-24 z-[-10] '
          />
        </div>

        <div className='flex flex-col gap-2 items-start justify-center md:w-[500px] '>
          <h1
            className='text-3xl
          
          font-light
          p-2
          text-cyan-500'>
            Commercial Grade Castor Oil
          </h1>
          <p
            className='text-sm
    
          font-light
          p-2
          '>
            Castor seeds mostly contain 50-60 percent of the oil weight. This
            brilliant and viscous castor oil is derived by Hydraulic
            (mechanical) pressing of seeds without applying heat, chemicals, or
            performing any solvent process. Pure cold-pressed Castor oil is also
            known as Virgin oil as it is extracted in its natural form by
            pressing and not by steam cooking or applying heat. The best
            cold-pressed castor oils are those which have herbal and healing
            benefits preserved in them.
          </p>
          <p
            className='text-sm
      
          font-light
          p-2
          '>
            Cold-pressed castor oil in India is considered to be the most
            valuable laxative in pharmaceutical industries for treating various
            skin diseases, as a dietary supplement, and for different medical
            conditions. There are also numerous benefits of cold-pressed castor
            oil for hair which include strengthening and aiding natural growth.
            At Ambuja, we make it a point that pure cold-pressed castor oil is
            free from suspended matter and is extracted under the most hygienic
            conditions.
          </p>
        </div>
      </motion.div>
      <Banner />
    </>
  );
};

export default CommercialGrade;
