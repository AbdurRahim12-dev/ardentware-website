import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link
import RoundButton from '../ui/Button/RoundButton';
import { GrContact } from 'react-icons/gr';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, slide down the header
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('header1').style.top = '0';
      } else {
        document.getElementById('header1').style.top = '-80px';
        document.getElementById('header').style.top = '-80px';
      }
    }
  }, []);
  return (
    <>
      <section id='header' className='bg-primary sticky top-0 z-50 transition-all duration-300 hidden md:block'>
        <div className='container flex justify-between items-center py-3'>
          <div className='space-y-1'>
            <Link to={`/service`} className='text-accent font-bold hidden lg:block'>
              Services
            </Link>
            <h3 className='text-lg text-white font-bold'>Data and AI</h3>
          </div>

          <ScrollLink
            to='service-contact'
            smooth={true}
            duration={500}
            offset={-75}
            className='hidden lg:block'
          >
            <div>
              <RoundButton
                label='Contact'
                className='bg-primary text-secondary border-2 border-secondary hover:border-gray-200 hover:text-gray-200 '
                icon={<GrContact />}
              />
            </div>
          </ScrollLink>
        </div>
      </section>
    
      <section id='header1'
        className='bg-primary transition-all duration-300 fixed -top-20 z-50 w-full'
      >
        <div className='container flex justify-between items-center py-3'>
          <div className='space-y-1'>
            <Link to={`/service`} className='text-accent font-bold hidden lg:block'>
              Services
            </Link>
            <h3 className='text-lg text-white font-bold'>Data and AI</h3>
          </div>

          <ScrollLink
            to='service-contact'
            smooth={true}
            duration={500}
            offset={-75}
            className='hidden lg:block'
          >
            <div>
              <RoundButton
                label='Contact'
                className='bg-primary text-secondary border-2 border-secondary hover:border-gray-200 hover:text-gray-200 '
                icon={<GrContact />}
              />
            </div>
          </ScrollLink>
        </div>
      </section>
    </>
  );
};

export default Header;
