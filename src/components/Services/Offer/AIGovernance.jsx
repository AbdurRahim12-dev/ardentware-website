import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'motion/react';

export default function AIGovernance() {
  return (
    <div
      className='relative px-2 md:px-0  overflow-hidden bg-black mt-8'
    >
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src='https://cognizant.scene7.com/is/image/cognizant/governance-and-ai-risk-mitigation-crosspromo-banner'
          alt=''
          className='object-cover w-full h-full'
          role='presentation'
        />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-6xl py-16'>
        <div className='max-w-3xl space-y-6'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=' text-[31.952px]  text-white lg:text-5xl leading-tight '
            style={{ fontWeight: '400' }}
          >
            A more effective approach to <br /> AI governance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='!mb-6 text-lg text-gray-200 sm:text-xl font-medium'
          >
            Traditional AI governance approaches are outdated and often ineffective. Our modern
            assurance solutions help you build trust in AI systems and free up time you can apply to
            setting thoughtful policy or managing current issues and unknown risks.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className=' bg-secondary text-primary hover:bg-secondary/90 px-8 py-3 rounded-full  font-semibold flex items-center gap-2'
          >
            <span style={{ fontSize: '22px' }}>Explore our solution</span>
            {/* <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' /> */}
            <BiRightArrow className='size-6 text-primary mt-1'  />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
