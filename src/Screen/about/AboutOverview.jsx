import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutOverview = () => {
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
        className='md:flex items-center font-Poppins justify-around px-5 '>
        <div className='flex flex-col md:gap-5 items-start justify-center'>
          <h1
            className='md:text-3xl text-xl
          
          font-light
          p-2
          text-cyan-500'>
            AGA OVERSEAS PVT. LTD
          </h1>
          <p
            className='md:text-xl text-sm
         
          font-light
          p-2
          '>
            Manufacturer,Supplier,Trader,Importer & Exporter Of Castrol Oil And
            Castrol Oil Derivatives.
          </p>
        </div>
        <div>
          <img
            src='https://i.ibb.co/hctsMc8/castor-oil-infra.webp'
            alt=''
          />
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='flex flex-col gap-5 items-center justify-center p-5 my-5'>
        <p className='text-center font-light md:text-2xl text-xl text-slate-400'>
          AGA OVERSEAS PVT. LTD. is an ISO 9001:2015 certified company engaged
          in Importing & Exporting a wide range of products. Products offered
          are castor oil and castor oil derivatives. We provide superior quality
          products which are widely accepted by our clients at a reasonable
          price.
        </p>
        <p className='text-center font-light md:text-2xl text-xl text-slate-400'>
          We are the leading Manufacturer, Supplier, Trader, Importer, and
          Exporter of goods and services. Our primary focus is to provide
          cost-effective & also the best standard quality products to our
          overseas clients.
        </p>
      </motion.div>
    </>
  );
};

export default AboutOverview;
