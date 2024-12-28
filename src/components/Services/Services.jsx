import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8'>
      <div className='space-y-4 mb-12'>
        <h2 className='text-4xl font-bold text-[#0A0F2C]'>Explore more services</h2>
        <p className='text-xl text-gray-700'>
          Learn more about other services that can enhance data and AI in your business:
        </p>
      </div>

      <div className='space-y-12'>
        {services.map((service) => {
          return (
            <div key={service.id} className='grid md:grid-cols-2 gap-8 items-center'>
              <div className='relative aspect-auto bg-black overflow-hidden'>
                <img
                  src={service.img}
                  alt='Quality engineering visualization'
                  width={600}
                  height={200}
                  className='object-cover'
                />
              </div>
              <div className='space-y-4'>
                <h3 className='text-3xl font-gellix font-semibold text-[#2B6DF5]'>
                 {service.title}
                </h3>
                <p className='text-primary text-lg leading-relaxed font-gellix'>
                  {service.desc}
                </p>
                <Link
                  href='#'
                  className='inline-flex items-center text-[#2B6DF5] font-semibold hover:text-black text-xl'
                >
                  Know more
                  {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
                  <BiRightArrow className="ml-2 size-6"/>
                </Link>
              </div>
            </div>
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
    id: 3,
    title: 'Consulting',
    desc: 'Our consultants elevate insight and experiences to help clients strategize, unify business and technology architectures, generate growth and enable competitive advantage.',
    img: 'https://cognizant.scene7.com/is/image/cognizant/consulting-th?fmt=png-alpha&attribute::MaxSize',
  },
];
