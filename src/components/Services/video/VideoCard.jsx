import React from 'react';
import { BiRightArrow } from 'react-icons/bi';

export default function VideoCard({ image, title, buttonText }) {
  return (
    <section
      className='relative min-h-[500px] bg-no-repeat bg-cover bg-center bg-fixed flex items-end'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='text-white p-8 container'>
        <div className='absolute top-28 md:top-20 w-11/12  lg:w-3/12  bg-primary/80 rounded-lg p-8 space-y-10'>
          <h2 className='text-3xl sm:text-3xl lg:text-5xl text-secondary font-semibold !leading-tight'>{title}</h2>
          <a
            href='#'
            className='flex items-center gap-2 text-xl text-secondary font-semibold w-max capitalize text-center'
          >
            {buttonText}{' '}
            <BiRightArrow className='text-2xl border-2 border-secondary rounded-full size-12 p-2' />
          </a>
        </div>
      </div>
    </section>
  );
}
