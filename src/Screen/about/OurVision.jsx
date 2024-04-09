import React from 'react';
import Banner from '../../components/Banner';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const OurVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);
  return (
    <div className=' font-Poppins'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5, delay: 0.25 }}
        className='md:flex items-center justify-around md:p-10 md:gap-20'>
        <div className='p-10 relative'>
          <img
            src='https://i.ibb.co/cXgRxw0/vision.webp'
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
            Our Vision
          </h1>
          <p
            className='text-sm
          
          font-light
          p-2
          '>
            AGA Overseas Pvt. Ltd. envisions of providing value addition to its
            people, customers, community and the nation as a whole through
            innovative products and quality service.
          </p>
          <h1
            className='text-3xl
        
          font-light
          p-2
          text-cyan-500'>
            Quality Assurance
          </h1>
          <p
            className='text-sm
         
          font-light
          p-2
          '>
            As the trading company of the AGA Group, we examine and manage
            manufacturers and suppliers to make sure they provide quality, safe
            and secure products, which we then deliver to customers inside and
            outside the Group.
          </p>
        </div>
      </motion.div>
      <Banner />
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='md:flex items-center justify-around p-10 gap-20'>
        <div className='p-10 relative'>
          <img
            src='https://i.ibb.co/svG7pK7/about-topsection-img.webp'
            alt=''
            className='rounded-lg '
          />
        </div>
        <div className='flex flex-col gap-2 md:items-start  justify-center  '>
          <h1
            className='md:text-3xl text-xl
          
          font-light
          p-2
          text-cyan-500'>
            Our Mission
          </h1>
          <p
            className='text-sm
         
          font-light
          p-2
          '>
            Striving to meet the increasing and diversified demands of the
            customers.
          </p>

          <p
            className='text-sm
          
          font-light
          p-2
          '>
            Being market leader in recycled market segments.
          </p>
          <p
            className='text-sm
         s
          font-light
          p-2
          '>
            Providing quality products & reliable services and sourcing from
            reputed manufacturers.
          </p>
          <p
            className='text-sm
      s
          font-light
          p-2
          '>
            Becoming professional marketing partner for our principals to meet
            the objectives of sales, market information, and customer service.
          </p>
          <p
            className='text-sm
     
          font-light
          p-2
          '>
            Being the preferred supplier of our customers, with our products
            exceeding their quality requirements.
          </p>
          <p
            className='text-sm
          
          font-light
          p-2
          '>
            Giving timely information to the customers regarding trends of the
            market dynamics.
          </p>
          <p
            className='text-sm
       
          font-light
          p-2
          '>
            Harnessing the creative energies of all our staffs through team
            work, develop and a transparent work environment Policy.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OurVision;
