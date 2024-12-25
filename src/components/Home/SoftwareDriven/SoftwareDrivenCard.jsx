import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SoftwareDrivenCard({ title, description, video, imageUrl }) {
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
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='relative h-[980px] overflow-hidden cursor-pointer group '
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <img
        src={imageUrl}
        alt={title}
        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500'
        // style={{ opacity: isHovered ? 0 : 1 }}
      /> */}

      <video
        ref={videoRef}
        src={video}
        loop
        muted
        playsInline
        loading='lazy'
        decoding='async'
        className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500'
      />

      <div className='absolute inset-0 bg-black/40 transition-opacity duration-500' />

      <div className='absolute inset-0 p-8 flex flex-col items-center justify-center text-center space-y-4'>
        <h2 className='text-white text-4xl md:text-6xl font-bold mb-2'>
          {title}
          <span className='text-[#45C4B0] rounded-full'>.</span>
        </h2>
        <div
          className={`transform transition-all duration-500 flex flex-col items-center ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className='text-white/90 mb-4 text-lg md:text-[27px]'>{description}</p>
          {/* <button className='rounded-full bg-[#45C4B0] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#3AA697]'>
            Learn More
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}
