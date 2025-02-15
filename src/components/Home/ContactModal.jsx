// import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import Questions_Form from './Questions_Form';
import { motion, AnimatePresence } from 'motion/react';

const ContactModal = ({ showButtons }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={showButtons ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className='fixed top-1/2 -right-10 !rotate-90 overflow-auto z-50'
        style={{
          WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on mobile
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          maxHeight: '80vh',
        }}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className='flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-white shadow-md hover:bg-accent/80 focus:outline-none '
        >
          Contact Us
        </button>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className='fixed inset-0 bg-primary/60 z-50 max-h-screen'
              style={{
                WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on mobile
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                // maxHeight: '80vh',
              }}
            />

            {/* Modal */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className='fixed inset-0 flex items-center justify-center z-50'
            >
              <div
                className='relative bg-white w-full mx-2 md:mx-10 rounded-lg shadow-xl overflow-auto'
                style={{
                  WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on mobile
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  maxHeight: '100vh',
                }}
              >
                {/* Close Button */}
                <div className='absolute top-4 right-4 p-4'>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className='text-gray-500 hover:text-gray-700 focus:outline-none'
                  >
                    <IoMdClose />
                  </button>
                </div>

                {/* Modal Content */}
                <div className='p-6 '>
                  <Questions_Form />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactModal;
