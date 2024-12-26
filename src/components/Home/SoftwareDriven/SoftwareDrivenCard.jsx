import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SoftwareDrivenCard({ title, description, video }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch((error) => console.error('Video play failed:', error));
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className='relative h-[440px] md:h-[980px]  overflow-hidden cursor-pointer group '
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <img
        src={imageUrl}
        alt={title}
        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500'
        // style={{ opacity: isHovered ? 0 : 1 }}
      /> */}

      {/* <video
        ref={videoRef}
        src={video}
        loop
        muted
        preload='metadata'
        playsInline
        loading='lazy'
        className='absolute inset-0 w-full h-full object-cover duration-500'
      /> */}

      <video
        ref={videoRef}
        loop
        muted
        preload='metadata'
        playsInline
        className='absolute inset-0 w-full h-full object-cover duration-500'
      >
        <source src={video} type='video/mp4' srcSet={video} />
        <img src={video} alt={title} className='w-full h-full object-cover' />
      </video>

      <div className='absolute inset-0 bg-black/40  duration-500' />

      <div className='absolute inset-0 p-8 flex flex-col items-center justify-center text-center md:w-10/12 md:mx-auto '>
        <h2
          className={`text-white text-4xl md:text-6xl font-bold font-gellix transform transition-all duration-500 !leading-tight ${isHovered ? '-translate-y-10' : 'translate-y-0'}`}
        >
          {title}
          <span className='text-[#45C4B0] rounded-full'>.</span>
        </h2>
        <div
          className={`transform transition-all duration-500 flex flex-col items-center ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className='text-white/90 text-lg md:text-[27px] md:leading-10 font-gellix'>
            {description}
          </p>
          {/* <button className='rounded-full bg-[#45C4B0] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#3AA697]'>
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
}
