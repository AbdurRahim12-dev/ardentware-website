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
          {menuItems.map((item, idx) => {
            // const isActive = location.pathname === item.link;
            return (
              <li key={item.name} className='relative'>
                <Link
                  to={item.link}
                  className='relative px-5 py-1 text-[19px] font-medium text-primary transition-all duration-300 group flex items-center gap-2'
                  // style={{
                  //   backgroundColor: location.pathname === item.link ? '#2f78c4' : '',
                  //   color: location.pathname === item.link ? '#fff' : '',
                  //   borderRadius: location.pathname === item.link ? '9999px' : '',
                  //   fontWeight: location.pathname === item.link ? '500' : '',
                  // }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span className='relative z-10 group-hover:text-primary transition-colors duration-300'>
                    {item.name}
                  </span>
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId='navbar-hover'
                      className='absolute inset-0 border-b-2 border-primary max-w-[6rem] mx-auto transition-all duration-150'
                      initial={{ opacity: 0, width: 0, scaleX: 0 }}
                      animate={{ opacity: 1, width: '100%', scaleX: 1 }}
                      exit={{ opacity: 0, width: 0, scaleX: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                        opacity: { duration: 0.3 },
                        exit: { duration: 0.3 },
                      }}
                    />
                  )}
                </Link>
                {/* <span
                  className={`absolute -bottom-2 h-[3px] bg-white opacity-50 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0 ${
                    isActive ? 'left-0 w-full' : 'left-1/2 w-0'
                  }`}
                /> */}
              </li>
            );
          })}
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
                const isActive = location.pathname === item.link;
                return (
                  <li
                    key={item.name}
                    className='relative py-3 px-3 hover:bg-primary hover:text-white duration-500 font-semibold cursor-pointer'
                    // style={{
                    //   backgroundColor: location.pathname === item.link ? '#2f78c4' : '',
                    //   color: location.pathname === item.link ? '#fff' : '',
                    //   // borderRadius: location.pathname === item.link ? '9999px' : '',
                    //   fontWeight: location.pathname === item.link ? '500' : ''
                    // }}
                  >
                    <Link to={item.link} onClick={() => setMobileMenuShow(false)}>
                      {item.name}
                    </Link>
                    <span
                      className={`absolute -bottom-2 h-[3px] bg-white opacity-50 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0 ${
                        isActive ? 'left-0 w-full' : 'left-1/2 w-0'
                      }`}
                    />
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
