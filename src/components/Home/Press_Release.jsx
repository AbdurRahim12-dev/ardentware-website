import { motion } from 'motion/react';

const Press_Release = () => {
  const text =
    ' At Ardentware, we empower businesses to stay ahead in a rapidly evolving world. By modernizing technology, reimagining processes, and transforming experiences, we let you focus on your business while we seamlessly manage the technology that drives it.';
  // const line = text.split('.');
  const words = text.split(' ');

  return (
    <>
      <div className='bg-accent text-white'>
        <div className='container py-10'>
          <motion.h2
            transition={{ duration: 0.8, delay: 0.3 }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            className='text-2xl font-medium'
          >
            Modernizing Technology, Transforming Experiences
            {/* <button className='text-sm font-semibold text-secondary inline-flex items-center'>
              Read More <BiRightArrow />
            </button> */}
          </motion.h2>
        </div>
      </div>
      <div className='container py-16'>
        {/* <motion.h4
          style={{
            fontWeight: 300,
            color: 'rgba(0, 0, 72, 1)',
          }}
          className='text-2xl md:text-[1.8rem] lg:text-[36px] text-left text-wrap leading-tight'
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          At <span className='font-bold text-accent'>Ardentware</span>, we empower businesses to
          stay ahead in a rapidly evolving world. By modernizing technology,{' '}
          <span className='font-bold text-accent'>reimagining</span> processes, and transforming
          experiences, we let you focus on your business while we seamlessly manage the technology
          that drives it.
        </motion.h4> */}

        <motion.h3
          className='text-2xl md:text-[1.8rem] lg:text-[36px] text-left text-wrap leading-tight'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className='inline-block text-2xl md:text-[1.8rem] lg:text-[36px] text-left text-wrap leading-tight  '
              style={{
                fontWeight: 300,
                color: 'rgba(0, 0, 72, 1)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8, once: true }}
              transition={{
                delay: index * 0.09, // Add delay for each word
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
              // dangerouslySetInnerHTML={{ __html: word }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h3>
      </div>
    </>
  );
};

export default Press_Release;
