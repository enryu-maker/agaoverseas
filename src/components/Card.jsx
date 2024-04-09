import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Card = (props) => {
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
      transition={{ duration: 0.5, delay: 0.25 }}>
      <motion.div
        whileHover={{ scale: 0.85 }}
        transition={{ type: 'spring', stiffness: 400, damping: 5 }}>
        <img
          src={props.img}
          alt={props.title}
          className='w-full h-[249.59px] object-cover rounded-xl font-Poppins cursor-pointer '
        />
      </motion.div>

      <div className='flex flex-col p-5 gap-2 '>
        <p className=' text-slate-400'>{props.time}</p>
        <p className='text-lg  text-left text-slate-500 hover:text-cyan-500 cursor-pointer'>
          {props.description}...
        </p>
        <motion.button className='flex hover:text-cyan-500 '>
          Read More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
