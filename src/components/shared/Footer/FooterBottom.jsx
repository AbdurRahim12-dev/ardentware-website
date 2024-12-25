import React from 'react';

export default function FooterBottom() {
  return (
    <nav className='w-full px-4 py-8 bg-white border-t border-gray-200'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Quick Link Column 1 */}
          <div className='space-y-4 '>
            <h2 className='text-lg font-semibold text-gray-900'>Quick Link</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                   Home
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Services
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Contact Us
                </a>
              </li>

            </ul>
          </div>

          {/* Services Column 2 */}
          <div className='space-y-4 '>
            <h2 className='text-lg font-semibold text-gray-900 '>Our Services</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Artificial Intelligence
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Networking solution
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Cloud Services
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Office 365
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                VDI and Application
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Infrastructure Services
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Column 3 */}
          <div className='space-y-4 '>
            <h2 className='text-lg font-semibold text-gray-900 '>Industries</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Education
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Healthcare
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Manufacturing
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Retail
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Transportation & Logistics
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-blue-600'>
                Travel & Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Find Us Ardentware */}
          <div className='space-y-4 '>
            <h2 className='text-lg font-semibold text-gray-900'>Find Us</h2>
            <div>
              <p>
                <span className='font-bold'>Address:</span> <br /> 915 N Gilbert Street
                Anaheim, CA 92801
              </p>
              <p className='mt-4'>
                <span className='font-bold'>Hours:</span> <br /> Monday—Friday: 9:00AM–5:00PM
                Saturday & Sunday: Close
              </p>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
