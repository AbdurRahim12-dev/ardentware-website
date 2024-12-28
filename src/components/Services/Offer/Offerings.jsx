import React from 'react';
import { BiRightArrow } from 'react-icons/bi';


export default function Offerings() {
  return (
    <section className='py-14'>
      {/* offer */}
      <div className='container space-y-10 mt-16'>
        <h3 className='text-3xl md:text-5xl font-gellix font-semibold'>Offerings</h3>
        <div className='flex flex-col md:flex-row gap-12'>
          <h3 className='text-4xl font-gellix '>
            Data and AI solutions for the <br /> modern enterprise
          </h3>
          <p className='flex-1 text-[1.2rem] font-semibold font-gellix text-primary'>
            Wherever you are on your journey, in whatever industry you are in—from aggregating vast
            points of data to building sophisticated AI models—Cognizant will meet you there. With
            our innovative offerings you will harness the power of data and AI to drive faster,
            predictive and proactive decisioning, all while educating the organization on your path
            forward.
          </p>
        </div>
      </div>

      
    </section>
  );
}
