import Card from './Card';
import { BlogData } from '../data.js';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Products = () => {
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
      className='flex items-center  max-w-full flex-col md:justify-between p-10 font-Poppins '>
      <div className='flex flex-col items-center justify-center gap-3 '>
        {/* Recent Post  */}
        <h1 className=' md:text-3xl text-xl text-center  text-cyan-500  '>
          Committed to Quality, Consistent in Excellence
        </h1>
        <p className='  text-center  w-full text-md md:px-10 '>
          As castor oil manufacturer, we understand the importance of providing
          pure and safe castor oil products. Our commitment and determination in
          every manufacturing step is our way of communicating ‘we care’ for our
          end-users. With extensive research, we formulate products that meet
          global quality standards.
        </p>
        <button className='mt-5  uppercase flex bg-white hover:bg-cyan-800 hover:text-white text-cyan-800 font-semibold  py-2 px-4 border border-cyan-500 transition-all ease-in-out delay-75 duration-75  rounded-full'>
          Explore All Products
        </button>
      </div>
      <div className='md:flex gap-5 p-5 '>
        {BlogData.map(
          (item, index) =>
            index < 2 && (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                img={item.img}
                time={item.time}
                location={item.location}
              />
            )
        )}
      </div>
    </motion.div>
  );
};

export default Products;
