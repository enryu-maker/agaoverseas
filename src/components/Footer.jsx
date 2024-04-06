import { ContactData, NavLinks } from '../data.js';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Footer = () => {
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
        className='grid  md:grid-cols-4 grid-cols-2 gap-4 bg-[#262E3B] text-white md:p-12 p-5 Roboto'>
        <div>
          <img
            src='Logo.png'
            alt=''
            className='md:w-32 md:h-22 w-28 h-28 '
          />

          <p className='text-left mt-5 text-sm '>
            AGA OVERSEAS PVT LTD is an ISO 9001:2015 certified company engaged
            in importing & Exporting a wide range of products. Products offered
            are castor oil. We provide superior quality products which are
            widely accepted by our clients at a reasonable price.
          </p>
        </div>
        <div>
          {/* Contact */}
          <h1 className='text-lg uppercase font-semibold font-sans'>
            Contact Info
          </h1>
          <span className=' inline-block w-[50px] h-[3px] bg-[#19b8f1] mb-2' />
          <div className='p-1'>
            {ContactData.map((item, index) => (
              <div
                key={index}
                className='flex flex-col gap-5'>
                <p className='tex-center font-semibold'>
                  Address :-{' '}
                  <span className='font-normal text-sm text-slate-200'>
                    {item.address}
                  </span>
                </p>

                <p className='tex-center font-semibold'>
                  Phone :-{' '}
                  <span className='font-normal text-sm text-slate-200'>
                    {item.phone}
                  </span>{' '}
                </p>
                <p className='tex-center font-semibold'>
                  E-mail :-{' '}
                  <span className='font-normal text-sm text-slate-200'>
                    {item.email}
                  </span>{' '}
                </p>
                <p className='tex-center font-semibold'>Social Links</p>
                <div className='flex gap-2'>
                  {item.socialLinks.map((link, index) => (
                    <Link
                      to={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      key={index}>
                      <link.icon
                        className='w-[30px] h-[30px] p-2'
                        style={{ backgroundColor: link.bg }}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {/* Service */}
          <h1 className='text-lg uppercase font-semibold font-sans'>
            Useful Link
          </h1>
          <span className=' inline-block w-[50px] h-[3px] bg-[#19b8f1] mb-2' />
          <div className='flex flex-col gap-3'>
            {NavLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className='text-sm font-sans'>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          {/* Form */}
          <h1 className='text-lg uppercase font-semibold font-sans'>
            Submit Form
          </h1>
          <span className=' inline-block w-[50px] h-[3px] bg-[#19b8f1] mb-2' />

          <form className='flex flex-col gap-2'>
            <div>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='w-full h-8 p-2 text-gray bg-black  bg-opacity-10  rounded focus:outline-none focus:ring-2 focus:ring-gray focus:ring-opacity-50'
              />
            </div>
            <div>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='w-full h-8 p-2 text-gray bg-black bg-opacity-10 rounded focus:outline-none focus:ring-2 focus:ring-gray focus:ring-opacity-50'
              />
            </div>
            <div>
              <textarea
                placeholder='Message'
                className='w-full h-[100px] p-2 text-gray bg-black  bg-opacity-10  rounded focus:outline-none focus:ring-2 focus:ring-gray focus:ring-opacity-50'
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 5 }}
              className='flex items-center  w-24 bg-transparent hover:bg-cyan-500 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-500 hover:border-transparent rounded'>
              Submit
            </motion.button>
          </form>
        </div>
      </motion.div>
      <div className='flex items-center justify-around text-white p-3 bg-[#262E3B]'>
        <p className='text-sm'>
          © Copyright agaoverseas.com. All right reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
