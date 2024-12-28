import React from 'react';
import { BiRightArrow } from 'react-icons/bi';

export default function AIResearch() {
  return (
    <div className='relative px-2 md:px-0  overflow-hidden bg-black '>
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src='https://cognizant.scene7.com/is/image/cognizant/advanced-ai-lab-hero-desktop'
          alt=''
          className='object-cover w-full h-full'
          role='presentation'
        />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-6xl py-16'>
        <div className='max-w-3xl space-y-6'>
          <h1 className=' text-4xl font-normal tracking-normal text-white sm:text-4xl lg:text-5xl'>
            Cognizant’s AI Research Lab augments AI-based decision-making
          </h1>
          <p className='!mb-6 text-lg text-gray-200 sm:text-xl font-semibold'>
            Our research team is improving data and AI driven decision-making by creating new
            methods that integrate various AI types to model complex situations and suggest
            solutions optimized for specific performance indicators.
          </p>
          <button className='capitalize bg-[#26efe9] text-primary flex items-center gap-2 px-6 py-2 rounded-full text-lg font-semibold'>
            know more
            {/* <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' /> */}
            <BiRightArrow className='size-6' />
          </button>
        </div>
      </div>
    </div>
  );
}
