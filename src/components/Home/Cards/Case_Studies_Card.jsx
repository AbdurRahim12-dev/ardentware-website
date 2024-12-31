// import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { motion, AnimatePresence } from 'motion/react';

const Case_Studies_Card = ({ data }) => {
  const { category, title, description, image } = data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.8, once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className='bg-cover bg-center min-h-[325px] rounded-xl overflow-hidden relative transition-all duration-300'
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className='text-white'>
        <AnimatePresence mode='wait'>
          {!isHovered ? (
            <motion.div
              key='initial'
              initial={{ y: 400 }}
              animate={{ y: 160 }}
              exit={{ y: 400, opacity: 0 }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
              className='absolute inset-0 bg-primary/60 p-5 transition-all duration-300 ease-in-out'
            >
              <span className='uppercase text-lg underline underline-offset-[15px] transition-all duration-300 ease-in-out'>
                {category}
              </span>
              <h3 className='mt-6 text-[1.5rem] md:text-[1.7rem] font-semibold text-secondary line-clamp-2 flex items-center gap-2 transition-all duration-300 ease-in-out'>
                {title} <BiRightArrow className='size-8 transition-all duration-300 ease-in-out' />
              </h3>
            </motion.div>
          ) : (
            <motion.div
              key='expanded'
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
              className='absolute inset-0 bg-primary/60 p-5 py-16 transition-all'
            >
              <span className='uppercase text-lg underline underline-offset-[15px]'>
                {category}
              </span>
              <h3 className='mt-6 text-[1.7rem] font-gellix font-semibold text-secondary flex items-center gap-2 leading-tight'>
                {title} <BiRightArrow className='size-8' />
              </h3>
              <p className='mt-5 text-xl leading-tight'>{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Case_Studies_Card;
