import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link
import RoundButton from '../ui/Button/RoundButton';
import { GrContact } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { containerVariants } from '../Motion/variants';

const Header = () => {
  return (
    <motion.section 
    variants={containerVariants}
    initial={false}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false }}
    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
    className='bg-primary sticky top-0 z-50'>
      <div className='container flex justify-between items-center py-3'>
        <div className='space-y-1'>
          <Link to={`/service`} className='text-accent font-bold hidden md:block'>Services</Link>
          <h3 className='text-lg text-white font-bold'>Data and AI</h3>
        </div>
        
        {/* Contact Button */}
        <ScrollLink 
          to='service-contact'
          smooth={true}
          duration={500}
          offset={-75}
          className='hidden md:block'
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
    </motion.section>
  );
};

export default Header;
