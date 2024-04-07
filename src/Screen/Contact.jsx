import React from 'react';
import AddressMap from '../components/AddressMap';
import { FaWhatsappSquare } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoMailUnread } from 'react-icons/io5';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}>
        <AddressMap />
      </motion.div>
      <div className='grid md:grid-cols-2 p-10 gap-10'>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -500 },
            visible: { opacity: 1, x: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}>
          <h1 className='text-xl font-Noto font-light p-2 text-cyan-500'>
            Send Us A Message
          </h1>
          <form className='py-10'>
            <div className='grid md:grid-cols-2 gap-2'>
              <input
                type='text'
                placeholder='Name'
                className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400  focus:ring-opacity-50'
              />
              <input
                type='email'
                placeholder='Email'
                className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
              />
              <input
                type='text'
                placeholder='Subject'
                className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
              />
              <input
                type='text'
                placeholder='Location'
                className='w-full h-10 p-2 border-none rounded-full bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
              />
            </div>
            <textarea
              placeholder='Message'
              className='w-full h-[100px] mt-5 p-2  border-none rounded bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50'
            />
            <motion.button
              animate={{
                pathLength: [0, 0.75],
                pathOffset: [0, 0.2],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'loop',
              }}
              className=' mt-5 w-full bg-white uppercase bg-transparent  text-cyan-800 hover:bg-cyan-400 font-semibold hover:text-white py-2 px-4 border border-cyan-500 rounded-full'>
              Submit
            </motion.button>
          </form>
        </motion.div>
        {/* Address Part */}
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 500 },
            visible: { opacity: 1, x: 0 },
          }}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className=' flex flex-col items-start'>
          <h1 className='text-xl font-Noto font-light text-left p-2 text-cyan-500'>
            Plant Address
          </h1>
          <p className='text-sm font-Noto font-light text-left p-2 '>
            Office No 8.JAGADISH SANKUL Near KBT CIRCLE, THATTE NAGAR, GANGAPUR
            ROAD, NASHIK, Maharashtra 422005
          </p>
          <h2 className=' text-xl font-Noto font-light text-left p-2 text-cyan-500'>
            Domestic Enquiry
          </h2>
          <p className='text-sm font-Noto font-light text-left p-2'>
            +91 9307519621
          </p>
          <h2 className=' flex items-center gap-2  text-xl font-Noto font-light text-left p-2 text-cyan-500'>
            WhatsApp
            <FaWhatsappSquare className=' text-green-500' />
          </h2>
          <p className='text-sm font-Noto font-semibold text-left p-2'>
            <Link
              to={
                'https://api.whatsapp.com/message/SKJLJM4RLTUWG1?autoload=1&app_absent=0'
              }
              target='_blank'
              className=' text-blue-500'>
              Join WhatsApp Link
            </Link>
          </p>
          <h2 className=' flex items-center gap-2  text-xl font-Noto font-light text-left p-2 text-cyan-500'>
            International enquiry
          </h2>
          <p className=' flex items-center gap-2 text-md text-black font-Noto font-semibold text-left p-2'>
            <MdCall className=' text-amber-950 w-5 h-5' />
            +91 8830025846
          </p>
          <h2 className=' flex items-center gap-2  text-xl font-Noto font-light text-left p-2 text-cyan-500'>
            E-Mail
          </h2>
          <p className=' flex items-center gap-2 text-md text-black font-Noto font-semibold text-left p-2'>
            <IoMailUnread className=' text-amber-950 w-5 h-5' />
            info@agaoverseas.com
          </p>
          <p className=' flex items-center gap-2 text-md text-black font-Noto font-semibold text-left p-2'>
            <IoMailUnread className=' text-amber-950 w-5 h-5' />
            sales@agaoverseas.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
