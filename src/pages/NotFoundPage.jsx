import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4'>
      <h1 className='text-[200px] font-light leading-none text-[#FF7F50]'>404</h1>

      <h2 className='text-2xl font-medium text-gray-900 mb-4 tracking-wide'>
        OOPS! NOTHING WAS FOUND
      </h2>

      <p className='text-center text-gray-600 mb-6 max-w-lg'>
        The page you are looking for might have been removed had its name changed or is temporarily
        unavailable.
      </p>

      <Link to='/' className='text-[#FF7F50] hover:text-[#FF6347] transition-colors duration-200'>
        Return to homepage
      </Link>
    </div>
  );
}
