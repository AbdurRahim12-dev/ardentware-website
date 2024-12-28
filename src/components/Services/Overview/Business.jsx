import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import Future from './Future';
import Artificial from './Artificial';

export default function Business({ id }) {
  return (
    <section className=''>
      <div className='container py-12'>
        <h3 className='text-[#000048] font-gellix text-3xl md:text-5xl font-semibold !leading-tight'>
          Business growth requires better decision making. Trusted intelligence with data and AI
          enables you to outpace dynamic markets and anticipate change—as if on intuition.
        </h3>
      </div>

      {/* Future Section */}
      <Future />

      {/* Artificial Intelligence Section */}
      <Artificial />
    </section>
  );
}
