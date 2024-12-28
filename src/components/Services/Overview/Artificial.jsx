import React from 'react'
import { BiRightArrow } from 'react-icons/bi'

export default function Artificial() {
  return (
    <div className='bg-[#f5f5f2] py-14'>
    <div className='container'>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        <img width={400} src='/images/iso-iec-42001-badge.png' alt='' loading='lazy' />

        <div className='space-y-4'>
          <h5 className='text-[#2f78c4] font-gellix text-2xl md:text-3xl font-semibold leading-tight'>
            Cognizant is the first IT services provider to achieve ISO <br />
            42001:2023 certification
          </h5>
          <p className='text-primary font-gellix text-xl font-medium leading-tight'>
            ISO/IEC 42001:2023 is the world’s first AI management system standard. The
            certification provides a structured way to manage risks and opportunities associated
            with AI, balancing innovation with governance. With this certification, clients can
            be assured of Cognizant's ability to provide best in class AI management practices
            that help them to minimize the legal, reputational, and operational risks associated
            with AI.
          </p>
          <button className='text-[#2f78c4] font-gellix  text-xl font-bold leading-tight flex items-center gap-2  rounded-md'>
            Learn about our responsible AI principles <BiRightArrow />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
