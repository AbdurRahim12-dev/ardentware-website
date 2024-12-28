import React from 'react';
import { BiRightArrow } from 'react-icons/bi';

export default function AIGovernance() {
  return (
    <div className='relative px-2 md:px-0  overflow-hidden bg-black mt-8'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src='https://cognizant.scene7.com/is/image/cognizant/governance-and-ai-risk-mitigation-crosspromo-banner'
          alt=''
          className='object-cover w-full h-full'
          role='presentation'
        />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-6xl py-16'>
        <div className='max-w-3xl space-y-6'>
          <h1 className=' text-4xl font-medium tracking- text-white sm:text-4xl lg:text-5xl font-gellix'>
            A more effective approach to <br /> AI governance
          </h1>
          <p className='!mb-6 text-lg text-gray-200 sm:text-xl font-semibold'>
            Traditional AI governance approaches are outdated and often ineffective. Our modern
            assurance solutions help you build trust in AI systems and free up time you can apply to
            setting thoughtful policy or managing current issues and unknown risks.
          </p>
          <button className=' group bg-[#26efe9] text-black hover:bg-[#26efe9]/90 px-8 py-3 rounded-full text-xl font-semibold gap-2 flex items-center'>
            Explore our solution
            {/* <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' /> */}
            <BiRightArrow className='size-6' />
          </button>
        </div>
      </div>
    </div>
  );
}
