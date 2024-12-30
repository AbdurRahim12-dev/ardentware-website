import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  return (
    <section
      id='navbar'
      className={`${location.pathname === '/service' ? '' : 'sticky top-0'} z-50 bg-white w-full shadow`}
    >
      <nav className='container flex items-center justify-between align-middle py-3 lg:py-0 lg:pb-1'>
        {/* <h2 className='text-2xl'>ARDENTWARE</h2> */}
        {/* Logo */}
        <Link to='/'>
          <img
            src={logo}
            srcSet={`${logo} 300w, ${logo} 600w, ${logo} 900w`}
            alt='logo'
            width={176}
            height={44}
            className='mx-auto my-auto align-middle'
            loading='lazy'
          />
        </Link>

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
        <ul className='hidden lg:flex items-center  mt-2'>
          {/* {menuItems.map((item, index) => {
            return (
              <li key={index + 1} className=''>
                <Link
                  to={item.link}
                  className='text-primary font-medium text-[20px] py-4 px-3 hover:bg-primary hover:text-white duration-500 font-gellix'
                >
                  {item.name}
                </Link>
              </li>
            );
          })} */}
          {menuItems.map((item, idx) => (
            <li key={item.href}>
              <Link
                to={item.link}
                className='relative px-5 py-1 text-[19px] font-medium text-primary transition-all duration-300 group flex items-center gap-2'
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className='relative z-10 group-hover:text-white transition-colors duration-300'>
                  {item.name}
                </span>
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId='navbar-hover'
                    className='absolute inset-0 bg-accent rounded-full'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      type: 'spring',
                      bounce: 0.4,
                      duration: 0.4,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* <div>
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
        </div> */}
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
            <ul className='text-primary text-xl'>
              {menuItems.map((item) => {
                return (
                  <li
                    key={item.link}
                    className='py-3 px-3 hover:bg-primary hover:text-white duration-500 font-semibold cursor-pointer'
                  >
                    <Link to={item.link} onClick={() => setMobileMenuShow(false)}>
                      {item.name}
                    </Link>
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
// 'Industries', 'Services', 'Products', 'Resources'
const menuItems = [
  {
    name: 'Industries',
    link: '#',
  },
  {
    name: 'Services',
    link: '/service',
  },
  {
    name: 'Products',
    link: '#',
  },
  {
    name: 'Resources',
    link: '#',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
];
