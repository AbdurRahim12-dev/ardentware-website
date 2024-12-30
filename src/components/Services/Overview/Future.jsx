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
      <div className='relative container py-16 px-2'>
        <div className='max-w-3xl space-y-6'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            className=' text-5xl font-semibold tracking-tight text-[#26efe9] sm:text-4xl lg:text-5xl '
          >
            Future-ready means AI-ready
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            className='!mb-6 text-lg text-gray-200 sm:text-xl font-normal'
          >
            Explore the five essential areas to achieve AI mastery in this new report based on data
            and AI research developed in collaboration with the Economist.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            className=' bg-secondary text-primary hover:bg-secondary/90 px-4 md:px-6 py-3 rounded-full text-xl font-semibold flex items-center gap-2'
          >
            Read the interactive report
            <BiRightArrow size={28} className='text-primary mt-1 font-thin' />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
