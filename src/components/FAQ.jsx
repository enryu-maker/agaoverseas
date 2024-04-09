import React from 'react';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const FAQ = ({ faq, index, toggleFAQ }) => {
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
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}>
      <div className='faq-question font-Poppins'>{faq.question}</div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, easing: 'linear' }}
        className='faq-answer font-Poppins'>
        {faq.answer}
      </motion.div>
    </motion.div>
  );
};

export default FAQ;
