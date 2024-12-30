import { motion } from 'motion/react';

export default function FooterBottom() {
  return (
    <nav className='w-full px-4 py-8 bg-white border-t border-gray-200 font-gellix'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Quick Link Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className='space-y-4 '
          >
            <h2 className='text-lg font-semibold text-primary'>Quick Link</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-primary hover:text-accent/80  '>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80  '>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80  '>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.9, once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className='space-y-4 '
          >
            <h2 className='text-lg font-semibold text-primary '>Our Services</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Networking solution
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Cloud Services
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Office 365
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  VDI and Application
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80  '>
                  Infrastructure Services
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Industries Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className='space-y-4 '
          >
            <h2 className='text-lg font-semibold text-primary '>Industries</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-primary hover:text-accent/80 '>
                  Education
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Healthcare
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Manufacturing
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80   '>
                  Retail
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80  '>
                  Transportation & Logistics
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-accent/80  '>
                  Travel & Hospitality
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Find Us Ardentware */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className='space-y-2 '
          >
            <h2 className='text-lg font-semibold text-primary'>Find Us</h2>
            <div>
              <p>
                <span className='font-bold'>Address:</span> <br />
                <span className='text-primary  font-gellix'>
                  {' '}
                  915 N Gilbert Street Anaheim, CA 92801
                </span>
              </p>
              <p className='mt-4'>
                <span className='font-bold'>Hours:</span> <br />
                <span className='text-primary  font-gellix'>
                  Monday—Friday: 9:00AM–5:00PM Saturday & Sunday: Close
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
