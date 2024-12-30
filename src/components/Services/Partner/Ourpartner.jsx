import { motion } from 'motion/react';

export default function Ourpartner() {
  return (
    <>
      <div className='container mt-16'>
        <div className='space-y-10'>
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-[31.952px] md:text-5xl font-semibold text-[#000048] leading-tight'
          >
            Our Partners and alliances for data and AI solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.8, once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-lg md:text-xl font-medium text-[#000048]'
          >
            We form partnerships and strategic alliances with world-class organizations to expand
            our service offerings and deliver comprehensive solutions to clients. Over 85 strategic
            alliances, with world-leading companies, enable us to provide complete data and AI
            solutions to your business and IT challenges.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12'>
          {logos.map((logo) => {
            return (
              <div key={logo.alt} className='flex justify-center items-center border'>
                <div className="relative group cursor-pointer">
                <div className="relative">
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    className='object-cover w-auto h-auto'
                    whileHover={{ scale: 1.1, transition: { duration: 0.8, delay: 0.2 } }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    loading='lazy'
                    width={200}
                    height={100}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-lg whitespace-nowrap"
                    style={{ 
                      x: '-50%',
                      y: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                  >
                    {logo.alt}
                  </motion.div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const logos = [
  {
    src: '/images/logo/AWS.jpg',
    alt: 'AWS',
  },
  {
    src: '/images/logo/google-cloud.jpg',
    alt: 'google-cloud',
  },
  {
    src: '/images/logo/microsoft.jpg',
    alt: 'microsoft',
  },
  {
    src: '/images/logo/Sophos.png',
    alt: 'Sophos',
  },
  {
    src: '/images/logo/Fortinate.png',
    alt: 'Fortinate',
  },
  {
    src: '/images/logo/trend-micro.jpg',
    alt: 'trend-micro',
  },
  {
    src: '/images/logo/proxmox.png',
    alt: 'Proxmox',
  },
];
