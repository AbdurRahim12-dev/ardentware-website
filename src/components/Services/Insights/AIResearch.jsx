import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'motion/react';

export default function AIResearch() {
  return (
    <div className='relative px-2 md:px-0  overflow-hidden bg-black '>
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src='https://cognizant.scene7.com/is/image/cognizant/advanced-ai-lab-hero-desktop'
          alt=''
          className='object-cover w-full h-full'
          role='presentation'
        />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-6xl py-16'>
        <div className='max-w-3xl space-y-6'>
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8 }}
            className=' text-[31.952px]  text-white lg:text-5xl leading-tight '
            style={{ fontWeight: '400' }}
          >
            Cognizant’s AI Research Lab augments AI-based decision-making
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }}
            className='!mb-6 text-lg text-gray-200 sm:text-xl font-normal'
          >
            Our research team is improving data and AI driven decision-making by creating new
            methods that integrate various AI types to model complex situations and suggest
            solutions optimized for specific performance indicators.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8 }}
            className=' bg-secondary hover:bg-secondary/90 text-primary flex items-center gap-1 px-6 rounded-full py-2 text-[19px] font-bold'
          >
            <span >Know more</span>
            <BiRightArrow className='size-6 text-primary mt-1' />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
