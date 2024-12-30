import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'motion/react';

const BackTopButton = ({ showButtons }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-5 right-5"
      >
        <button
          onClick={scrollToTop}
          className='hidden lg:flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow-md hover:bg-primary/80 focus:outline-none'
        >
          <span>Back to top</span>
          <BiRightArrow className='-rotate-90' />
        </button>
      </motion.div>
    </>
  );
};

export default BackTopButton;
