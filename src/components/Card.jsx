import { MdLocationPin } from 'react-icons/md';
import { LuClock10 } from 'react-icons/lu';
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
      transition={{ duration: 0.5, delay: 0.25 }}
      className='shadow'>
      <img
        src={props.img}
        alt={props.title}
        className='w-full h-[249.59px] object-cover  '
      />
      <div className='flex flex-col p-5 gap-2 '>
        <h1 className='text-lg font-semibold'>{props.title}</h1>

        <p className='text-sm text-wrap text-slate-500'>
          {props.description}...
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 5 }}
          className=' w-22 bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded'>
          Read More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
