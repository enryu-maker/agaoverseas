import React from 'react';
import Banner from '../../components/Banner';
import { BlogData } from '../../data';
import Card from '../../components/Card';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const RefinedGrade = () => {
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
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5, delay: 0.25 }}
        className='md:flex items-center font-Poppins justify-around md:p-10 md:gap-20'>
        <div className='p-10 relative'>
          <img
            src='https://www.ambujasolvex.com/ast/uploads/2021/06/refined-castor-oil-1.webp'
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
            Best Refined Castor Oil Manufacturer
          </h1>
          <p
            className='text-sm
        
          font-light
          p-2
          '>
            Refined Castor oil is a yellow viscous liquid free from suspended
            matter and is insoluble in water. Refined Castor oil manufacturers
            produce this form of pure castor oil by refining commercial grade
            castor oil through the process of bleaching and filtering. Bleaching
            is performed to reduce the colour and carbon moisture content with
            the help of activated carbon and bleaching earth. The refining
            process removes excess impurities from refined castor oil such as
            FFA, colloidal matter, phospholipids, and refining also extend the
            storage life of castor oil. There are various refined castor oil
            benefits industries for various industrial applications such as
            formulation of beauty products. Additionally, it is used as a
            lubricant in vitamin and mineral tablet coatings and as a raw
            material for the manufacture of value-added castor oil derivatives.
          </p>
        </div>
      </motion.div>
      <div className='flex items-center flex-col justify-center gap-2 mt-5 mb-5'>
        <h1
          className='text-3xl
       
          font-normal
          p-2
          text-cyan-500'>
          Explore Other Castor Oil Products
        </h1>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className='grid md:grid-cols-2 gap-4 p-20 '>
          {BlogData.map(
            (post, index) =>
              index < 2 && (
                <Card
                  key={index}
                  title={post.title}
                  description={post.description}
                  img={post.img}
                  time={post.time}
                  location={post.location}
                  className=''
                />
              )
          )}
        </motion.div>
      </div>
      <Banner />
    </>
  );
};

export default RefinedGrade;
