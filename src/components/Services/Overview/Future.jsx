import React from 'react'
import { BiRightArrow } from 'react-icons/bi'

export default function Future() {
  return (
      <div className='relative px-2 md:px-0  overflow-hidden bg-black mt-8'>
        {/* Background image */}
        <div className='absolute inset-0'>
          <img
            src='https://cognizant.scene7.com/is/image/cognizant/frb-ai-interactive-report-background'
            alt=''
            className='object-cover w-full h-full'
            role='presentation'
          />
        </div>

        {/* Content */}
        <div className='relative mx-auto max-w-6xl py-16'>
          <div className='max-w-3xl space-y-6'>
            <h1 className=' text-4xl font-semibold tracking-tight text-[#26efe9] sm:text-4xl lg:text-5xl font-gellix'>
              Future-ready means AI-ready
            </h1>
            <p className='!mb-6 text-lg text-gray-200 sm:text-xl font-semibold'>
              Explore the five essential areas to achieve AI mastery in this new report based on
              data and AI research developed in collaboration with the Economist.
            </p>
            <button className='group bg-[#26efe9] text-black hover:bg-[#26efe9]/90 px-8 py-3 rounded-full text-xl font-medium inline-flex items-center gap-2'>
              Read the interactive report
              {/* <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' /> */}
              <BiRightArrow />
            </button>
          </div>
        </div>
      </div>
  )
}
