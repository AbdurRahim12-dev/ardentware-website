import { ImLinkedin2 } from 'react-icons/im';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const mediaLogo = [
    { id: 'linkedin', icon: <ImLinkedin2 /> },
    { id: 'twitter', icon: <FaXTwitter /> },
    { id: 'facebook', icon: <FaFacebookF /> },
    { id: 'instagram', icon: <FaInstagram /> },
    { id: 'youtube', icon: <FaYoutube /> },
  ];

  const navItems = [
    'SiteMap',
    'Terms',
    'Privacy Notice',
    `©${new Date().getFullYear()} Cognizant, all rights reserved.`,
  ];
  return (
    <section className='bg-[#E8E8E6] py-6'>
      {/* Social Media Link */}
      <div className='container flex flex-col md:flex-row gap-3 items-center justify-between'>
        <div className='text-accent text-3xl flex items-center gap-4'>
          {mediaLogo.map((item) => (
            <div key={item.id}>{item.icon}</div>
          ))}
        </div>
        {/* Navigation Links */}
        <div className='flex items-center gap-4 text-primary text-sm'>
          {navItems.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
