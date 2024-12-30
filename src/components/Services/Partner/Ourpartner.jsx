import { motion } from 'motion/react';

export default function Ourpartner() {
  return (
    <>
      <div
        className='container mt-16'
      >
        <div className='space-y-10'>
          <motion.h3
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8 }}
            className='text-[31.952px] md:text-5xl font-semibold text-[#000048] leading-tight'
          >
            Our Partners and alliances for data and AI solutions
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.8 }}
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
              <div
                key={logo.id}
                className='flex justify-center items-center border'
              >
                <motion.img
                  src={logo.image}
                  alt={logo.id}
                  className='object-cover'
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.8 }}
                />
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
    id: 'microsoft',
    image: '/images/logo/microsoft.jpg',
  },
  {
    id: 'aws',
    image: '/images/logo/AWS.jpg',
  },
  {
    id: 'google-cloud',
    image: '/images/logo/google-cloud.jpg',
  },
  {
    id: 'proxmox',
    image: '/images/logo/proxmox.png',
  },
  {
    id: 'Sophos',
    image: '/images/logo/Sophos.png',
  },
  {
    id: 'trend-micro',
    image: '/images/logo/trend-micro.jpg',
  },
];
