import { motion } from 'motion/react';

const Header_Text = ({ title, description }) => {
  return (
    <div className='text-primary'>
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.8, once: true }}
        className='text-[31.952px] md:text-5xl font-semibold leading-tight'
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8, once: true }}
          className='mt-5 text-[19px] md:text-xl font-medium leading-tight'
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default Header_Text;
