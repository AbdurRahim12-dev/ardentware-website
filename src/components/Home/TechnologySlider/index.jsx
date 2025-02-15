import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'motion/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

export default function TechnologySlider() {
  const logos = useMemo(() => {
    return [
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
        src: '/images/logo/proxmox-x.png',
        alt: 'Proxmox',
      },
    ];
  }, []);
  return (
    <div className='bg-gray-100'>
      <div className='container w-full mx-auto py-8 md:py-16 px-2 md:px-4 '>
        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.8, once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-3xl md:text-4xl font-bold text-center text-gray-800 font-gellix'
        >
          Technology Partners
        </motion.h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            // When window width is >= 640px (sm)
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // When window width is >= 768px (md)
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // When window width is >= 1024px (lg)
            1024: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          style={{
            '--swiper-pagination-color': '#45C4B0',
            '--swiper-pagination-progressbar-bg-color': '#45C4B0',
            '--swiper-pagination-progressbar-opacity': 1,
            '--swiper-pagination-progressbar-height': '4px',
            '--swiper-pagination-progressbar-width': '60%',
            '--swiper-pagination-progressbar-bottom': '20px',
            '--swiper-pagination-progressbar-left': '20%',
            padding: '30px',
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper md:py-14'
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className='flex justify-center items-center h-24 md:h-32'>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className='w-full h-auto object-contain max-h-full px-2'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
