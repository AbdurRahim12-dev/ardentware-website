import React from 'react';

export default function FooterBottom() {
  return (
    <nav className='w-full px-4 py-8 bg-white border-t border-gray-200 font-gellix'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Quick Link Column 1 */}
          <div className='space-y-4 '>
            <h2 className='text-lg font-semibold text-primary'>Quick Link</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                   Home
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Services
                </a>
              </li>
              <li>
                  <a href='#' className='text-primary hover:text-secondary font-gellix  '> 
                Contact Us
                </a>
              </li>

            </ul>
          </div>

          {/* Services Column 2 */}
          <div className='space-y-4 '>
            <h2 className='text-lg font-semibold text-primary '>Our Services</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Artificial Intelligence
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Networking solution
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Cloud Services
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Office 365
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                VDI and Application
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Infrastructure Services
                </a>
              </li>
            </ul>
          </div>

          {/* Industries Column 3 */}
          <div className='space-y-4 '>
            <h2 className='text-lg font-semibold text-primary '>Industries</h2>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix'>
                Education
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Healthcare
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Manufacturing
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Retail
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Transportation & Logistics
                </a>
              </li>
              <li>
                <a href='#' className='text-primary hover:text-secondary font-gellix  '>
                Travel & Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Find Us Ardentware */}
          <div className='space-y-2 '>
            <h2 className='text-lg font-semibold text-primary'>Find Us</h2>
            <div>
              <p>
                <span className='font-bold'>Address:</span> <br /> 
               <span className='text-primary  font-gellix'> 915 N Gilbert Street
               Anaheim, CA 92801</span>
              </p>
              <p className='mt-4'>
                <span className='font-bold'>Hours:</span> <br /> 
                <span className='text-primary  font-gellix'>Monday—Friday: 9:00AM–5:00PM
                Saturday & Sunday: Close</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
