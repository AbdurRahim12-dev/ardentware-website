import { ImLinkedin2 } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'motion/react';
const Footer = () => {
  const mediaLogo = [
    { id: 'linkedin', icon: <ImLinkedin2 />, link: '#' },
    { id: 'twitter', icon: <FaXTwitter />, link: '#' },
    { id: 'facebook', icon: <FaFacebookF />, link: '#' },
    { id: 'instagram', icon: <FaInstagram />, link: '#' },
    { id: 'youtube', icon: <FaYoutube />, link: '#' },
  ];

  const navItems = [
    { id: 'Sitemap', link: '#' },
    { id: 'Terms', link: '#' },
    { id: 'Privacy Notice', link: '#' },
    { id: `©${new Date().getFullYear()} Ardentware, all rights reserved.`,  },
  ];
  return (
    <section
      className='bg-[#E8E8E6] py-6 mt-8 md:mt-0 '
    >
      {/* Social Media Link */}
      <div className='container grid grid-cols-1 md:grid-cols-2 '>
        <div className='text-accent text-3xl flex items-center gap-4'>
          {mediaLogo.map((item) => (
            // <div key={item.id}>{item.icon}</div>
            <motion.a
              key={item.id}
              href={item.link}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8, once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        {/* Navigation Links */}
        <div className='mt-8 md:mt-0 flex flex-col md:flex-row flex-wrap gap-4 md:justify-center md:items-center font-medium '>
          {navItems.map((item, index) => (
            // <span key={index}>{item}</span>
            <motion.a
              key={index}
              href={item.link}
              className='text-primary hover:text-accent/80'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8, once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {item.id}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
