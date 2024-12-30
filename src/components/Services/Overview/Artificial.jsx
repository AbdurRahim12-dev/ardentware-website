import  {motion} from 'motion/react';
import { BiRightArrow } from 'react-icons/bi'

export default function Artificial() {
  return (
    <div className='bg-[#f5f5f2] py-14'>
    <div className='container'>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        <motion.img 
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         whileHover={{ scale: 1.1 }}
         viewport={{ amount: 0.8, once: true }}
         transition={{ duration: 0.5, delay: 0.2 }}
         width={400} src='/images/iso-iec-42001-badge.png' alt='' loading='lazy' />

        <div className='space-y-4 px-4'>
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-accent  text-[25px] md:text-3xl font-semibold leading-snug'
          >
            Cognizant is the first IT services provider to achieve ISO <br  className='hidden md:block'/>
            42001:2023 certification
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true  }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='text-primary font-gellix text-xl font-medium leading-tight'
          >
            ISO/IEC 42001:2023 is the world’s first AI management system standard. The
            certification provides a structured way to manage risks and opportunities associated
            with AI, balancing innovation with governance. With this certification, clients can
            be assured of Cognizant&apos;s ability to provide best in class AI management practices
            that help them to minimize the legal, reputational, and operational risks associated
            with AI.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='text-accent  text-[18px] md:text-[20px] font-bold leading-tight flex items-center gap-2  rounded-md text-left'
          >
            Learn about our responsible AI principles <BiRightArrow size={28} className='text-accent mt-1 font-thin'/>
          </motion.button>
        </div>
      </div>
    </div>
  </div>
  )
}
