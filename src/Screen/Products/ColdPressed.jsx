import React from 'react';
import Banner from '../../components/Banner';

const ColdPressed = () => {
  return (
    <>
      <div className='md:flex items-center justify-around p-10 gap-20'>
        <div className='p-10 relative'>
          <img
            src='https://www.ambujasolvex.com/ast/uploads/2021/06/cold-pressed-castor-oil-2.webp'
            alt=''
            className='rounded-lg '
          />
          <img
            src='https://i.ibb.co/1Xqg3v6/leaf-back.png'
            alt=''
            className='absolute right-0 top-60 md:top-96 w-24 h-24 z-[-10] '
          />
        </div>

        <div className='flex flex-col gap-2 items-start justify-center w-[500px] '>
          <h1
            className='text-3xl
          font-Noto
          font-light
          p-2
          text-cyan-500'>
            Best Cold-Pressed Castor Oil
          </h1>
          <p
            className='text-sm
          font-Noto
          font-light
          p-2
          '>
            Castor seeds mostly contain 50-60 percent of the oil weight. This
            brilliant and viscous castor oil is derived by Hydraulic
            (mechanical) pressing of seeds without applying heat, chemicals, or
            performing any solvent process. Pure cold-pressed Castor oil is also
            known as Virgin oil as it is extracted in its natural form by
            pressing and not by steam cooking or applying heat. The best
            cold-pressed castor oils are those which have herbal and healing
            benefits preserved in them.
          </p>
          <p
            className='text-sm
          font-Noto
          font-light
          p-2
          '>
            Cold-pressed castor oil in India is considered to be the most
            valuable laxative in pharmaceutical industries for treating various
            skin diseases, as a dietary supplement, and for different medical
            conditions. There are also numerous benefits of cold-pressed castor
            oil for hair which include strengthening and aiding natural growth.
            At Ambuja, we make it a point that pure cold-pressed castor oil is
            free from suspended matter and is extracted under the most hygienic
            conditions.
          </p>
        </div>
      </div>

      <Banner />
    </>
  );
};

export default ColdPressed;
