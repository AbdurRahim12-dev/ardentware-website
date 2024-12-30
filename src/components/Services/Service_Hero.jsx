import { BiRightArrow } from 'react-icons/bi';
import { motion } from 'framer-motion';
const Service_Hero = () => {
  return (
    <section className='bg-[url("https://www.cognizant.com/content/dam/connectedassets/cognizant-global-marketing/marketing-channels/cognizant-dotcom/en_us/services/images/artificial-intelligence-services-hero-image.jpg")] bg-cover bg-center bg-no-repeat relative'>
      <div className='container text-white p-0'>
        <motion.h1
          initial={{ y: 100 }} // Start off-screen at the bottom
          animate={{ y: 0 }} // Slide up to its original position
          transition={{
            duration: 0.8,
            type: 'spring',
            damping: 20,
            stiffness: 100,
          }}
          className='text-[3rem] md:text-[5rem] font-semibold w-full md:w-[58%] leading-tight  py-[5.5rem] px-2'
        >
          Empowering better, faster decision-making with data and AI
        </motion.h1>
        <div className='bg-white/85 flex flex-col md:flex-row items-center gap-4 p-4 w-full '>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <img
              src='https://cognizant.scene7.com/is/image/cognizant/amf1-a-winning-strategy-thumbnail-042023'
              alt=''
              className='w-full md:w-[400px] h-[225px] object-cover rounded-lg'
            />
          </motion.div>
          <div className='relative z-10 space-y-4 pb-12'>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className='md:text-2xl text-xl text-primary font-semibold'
            >
              AMF1: A winning strategy fueled with insight and speed
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              className='text-[20px] text-primary pr-10 font-medium'
            >
              We’re engineering technology, operations and data so that AMF1 can improve processes,
              speed decision-making and win races—and fans.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              href='#'
              className='flex items-center gap-2 text-lg text-secondary font-semibold w-max'
            >
              <button
                type='submit'
                className='flex justify-center items-center rounded-full bg-secondary px-6 py-[9px] text-primary text-xl font-semibold hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-secobg-secondary focus:ring-offset-2 gap-2 duration-300'
              >
                Watch video <BiRightArrow className='size-6 mt-1' />
              </button>
            </motion.a>
            {/* <button style={{fontSize: '22px'}} className='bg-secondary text-primary hover:bg-secondary/60 duration-300 font-semibold py-2 px-4 rounded-full flex items-center'>
              Watch video <BiRightArrow className='size-8' />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service_Hero;
