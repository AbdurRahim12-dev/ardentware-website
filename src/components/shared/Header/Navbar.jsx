import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  return (
    <section className='container'>
      <nav className='flex items-center justify-between py-3 lg:py-0 lg:pb-1'>
        <div className='flex items-center'>
          {/* <img src="https://via.placeholder.com/150" alt="logo" /> */}
          {/* For mobile menu button */}
          <div className='lg:hidden flex items-center gap-2 mr-2'>
            {mobileMenuShow ? (
              <button onClick={() => setMobileMenuShow(!mobileMenuShow)}>
                <IoCloseSharp className='text-2xl' />
              </button>
            ) : (
              <button onClick={() => setMobileMenuShow(!mobileMenuShow)}>
                <GiHamburgerMenu className='text-2xl' />
              </button>
            )}
          </div>
          <h2 className='text-2xl'>ARDENTWARE</h2>
          <ul className='hidden lg:flex items-center ml-8'>
            {['Industries', 'Services', 'Products', 'Resources'].map((item, index) => {
              return (
                <li key={index + 1} className=''>
                  <Link
                    to='/service'
                    className='text-primary text-lg py-5 px-3 hover:bg-primary hover:text-white duration-500 font-semibold'
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className='relative'>
            <input
              type='text'
              id='Search'
              placeholder='Search for...'
              className='w-full rounded-md border border-primary/40 py-2.5 px-3 sm:text-lg focus:outline-primary'
            />

            <span className='absolute inset-y-0 end-0 grid w-12 place-content-center'>
              <button type='button' className='text-gray-600 hover:text-gray-700'>
                <span className='sr-only'>Search</span>
                <RiSearchLine />
              </button>
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuShow && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className='bg-white z-50 absolute w-full left-0'
          >
            <ul className='text-primary text-2xl'>
              {['Industries', 'Services', 'Products', 'Resources'].map((item, index) => {
                return (
                  <li
                    key={index + 1}
                    className='py-5 px-3 hover:bg-primary hover:text-white duration-500 font-semibold cursor-pointer'
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
