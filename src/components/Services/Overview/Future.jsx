import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'motion/react';

export default function Future() {
  return (
    <div className='relative px-2 md:px-0  overflow-hidden bg-black mt-8'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src='https://cognizant.scene7.com/is/image/cognizant/frb-ai-interactive-report-background'
          alt=''
          className='object-cover w-full h-full'
          role='presentation'
        />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-6xl py-16'>
        <div className='max-w-3xl space-y-6'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }}
            className=' text-5xl font-semibold tracking-tight text-[#26efe9] sm:text-4xl lg:text-5xl '
          >
            Future-ready means AI-ready
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }}
            className='!mb-6 text-lg text-gray-200 sm:text-xl font-normal'
          >
            Explore the five essential areas to achieve AI mastery in this new report based on data
            and AI research developed in collaboration with the Economist.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8 }}
            className=' bg-secondary text-primary hover:bg-secondary/90 px-8 py-3 rounded-full text-lg md:text-[21px] font-semibold flex items-center gap-2'
          >
            <span>Read the interactive report</span>
            {/* <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' /> */}
            <BiRightArrow size={28} className='text-primary mt-1 font-thin' />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
