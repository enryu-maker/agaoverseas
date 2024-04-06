import { BlogData } from '../data';
import Card from '../components/Card';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

//  className = 'grid md:grid-cols-3 gap-4';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  let date = new Date().toUTCString().slice(5, 16);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div className='flex items-center justify-center flex-col p-12  '>
      <h1 className='text-2xl font-Noto font-light p-2 text-cyan-500'>
        The Benefits Of Castor Oil To Hair & Skin
      </h1>
      <p className='p-2  text-slate-500'>{date}</p>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5, delay: 0.25 }}
        className='grid'>
        {BlogData.map(
          (post, index) =>
            index < 1 && (
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
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className=' text-2xl font-Noto text-cyan-600 py-10 '>
        Discover the Castor World
      </motion.div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='grid md:grid-cols-3 gap-4 '>
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
      </motion.div>
      <div className='flex items-center justify-center gap-5 '>
        <div className=' bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-500'>
          <FaAngleLeft />
        </div>
        <div className='bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-500'>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Blog;
