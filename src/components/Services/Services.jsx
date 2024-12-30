import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section className='container px-4 py-16 sm:px-6 lg:px-8'>
      <div className='space-y-4 mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[31.952px] md:text-5xl font-semibold text-[#0A0F2C] leading-tight'
        >
          Explore more services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: true  }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-lg md:text-xl text-primary font-medium  leading-tight'
        >
          Learn more about other services that can enhance data and AI in your business:
        </motion.p>
      </div>

      <div className='space-y-5'>
        {services.map((service) => {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.8, once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 '
            >
              <div className='relative bg-black overflow-hidden h-[200px] md:h-[250px]'>
                <motion.img
                  src={service.img}
                  alt='Quality engineering visualization'
                  width={600}
                  height={200}
                  className='object-cover w-full h-full'
                  loading='lazy'
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className='space-y-3 md:space-y-4 col-span-1 md:col-span-2'>
                <h3 className='text-2xl md:text-[27px] font-semibold text-accent'>{service.title}</h3>
                <p className='text-primary text-base md:text-lg leading-relaxed'>{service.desc}</p>
                <Link
                  href='#'
                  className='inline-flex items-center gap-1 text-accent font-semibold hover:text-accent/80 text-lg md:text-xl'
                >
                  Know more
                  <BiRightArrow className='mt-[5px] size-5 md:size-6' />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

const services = [
  {
    id: 1,
    title: 'Quality engineering and assurance',
    desc: 'Cognizant quality engineering and assurance—our robust end-to-end, ecosystem approach to achieving and maintaining quality of process, application and systems—helps businesses across industry verticals succeed in digital at speed. Simplify and modernize, improve CX, and accelerate business and technology change with QEA.',
    img: 'https://cognizant.scene7.com/is/image/cognizant/qa-th?fmt=png-alpha&attribute::MaxSize',
  },
  {
    id: 2,
    title: 'Sustainability',
    desc: 'Cognizant advisory services and solutions help organizations become planet stewards, reduce their environmental footprint and turn sustainability commitments into achievable milestones.',
    img: 'https://cognizant.scene7.com/is/image/cognizant/sustainability-th?fmt=png-alpha&attribute::MaxSize',
  },
  {
    id: 3,
    title: 'Security',
    desc: 'Cognizant’s end-to-end security solutions combine deep domain and industry expertise with a future-focused approach that eliminates security blind spots and gives businesses the confidence to be bold, move faster and succeed.',
    img: 'https://cognizant.scene7.com/is/image/cognizant/security-th?fmt=png-alpha&attribute::MaxSize',
  },
  {
    id: 4,
    title: 'Consulting',
    desc: 'Our consultants elevate insight and experiences to help clients strategize, unify business and technology architectures, generate growth and enable competitive advantage.',
    img: 'https://cognizant.scene7.com/is/image/cognizant/consulting-th?fmt=png-alpha&attribute::MaxSize',
  },
];
