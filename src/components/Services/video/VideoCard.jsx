import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'motion/react';

export default function VideoCard({ image, title, buttonText }) {
  return (
    <section
      className='relative min-h-[500px] bg-no-repeat bg-cover bg-center bg-fixed flex items-end'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='text-white p-4 md:p-8 container'>
        <div
          className='absolute top-28 md:top-20 w-11/12  lg:w-5/12 xl:w-3/12  bg-primary/80 rounded-lg p-8 space-y-4 md:space-y-10'
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl sm:text-3xl lg:text-5xl text-secondary font-semibold !leading-tight'
          >
            {title}
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href='#'
            className='flex items-center gap-2 text-lg md:text-xl text-secondary font-semibold w-max text-center'
          >
            {buttonText}{' '}
            <BiRightArrow className='text-2xl border-2 border-secondary rounded-full md:size-11 size-8 p-[6px] md:p-2' />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
