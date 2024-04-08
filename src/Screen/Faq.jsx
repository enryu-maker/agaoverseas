import React from 'react';
import { FaqData } from '../data';
import FAQ from '../components/FAQ';

const Faq = () => {
  const [faqs, setFaqs] = React.useState(FaqData);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className='flex flex-col items-center justify-center gap-5 py-5 px-10'>
      <div className='faqs'>
        {faqs.map((faq, index) => (
          <FAQ
            faq={faq}
            index={index}
            key={index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
