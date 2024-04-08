import React from 'react';
import { BlogData } from '../../data';
import Card from '../../components/Card';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Product = () => {
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
        className='flex items-center justify-around px-5'>
        <div className='flex flex-col gap-3 items-start justify-center'>
          <h1
            className='text-3xl
          font-Noto
          font-light
          p-2
          text-cyan-500'>
            Castor Oil Products
          </h1>
          <p
            className='text-3xl
          font-Noto
          font-light
          p-2
          '>
            Catering the World with the Vow of Quality
          </p>
        </div>
        <div>
          <img
            src='castor-oil.webp'
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
        className='flex items-center justify-center mt-2 flex-col gap-3 px-56'>
        <h1
          className='text-2xl
          font-Noto
          font-light
          p-2
          text-cyan-500'>
          Our Array of Castor Oil Derivatives
        </h1>
        <p className='text-sm text-center font-light'>
          Natural castor oil derived from Ricinus communis seeds is a
          multi-purpose oil that has been widely used for stand-alone
          applications as well as a vital ingredient for other formulations. As
          one of the reputed castor oil companies, we select the best raw
          materials to formulate castor oil derivatives. Paying close attention
          to the quality of castor products being produced at every junction of
          the manufacturing chain, we aim to facilitate diverse industries at
          different corners of the world. With more than 50 years of expertise,
          strict adherence to international standards of quality, and research
          capabilities we are emerging as the leading castor oil derivatives
          manufacturer in India.
        </p>
      </motion.div>
      <div className='grid md:grid-cols-3 p-5 gap-5 mt-5 mb-5 '>
        {BlogData.map((post, index) => (
          <Card
            key={index}
            title={post.title}
            description={post.description}
            img={post.img}
            time={post.time}
            location={post.location}
            className=''
          />
        ))}
      </div>
    </>
  );
};

export default Product;
