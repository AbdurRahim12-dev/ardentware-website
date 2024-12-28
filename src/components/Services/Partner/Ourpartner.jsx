import React from 'react';
import Slider from './Slider';

export default function Ourpartner() {
  return (
    <>
      <div className='container mt-16'>
        <div className='space-y-14'>
          <h3 className='text-5xl font-gellix font-semibold text-[#000048]'>
            Our Partners and alliances for data and AI solutions
          </h3>
          <p className='text-xl font-medium font-gellix text-[#000048]'>
            We form partnerships and strategic alliances with world-class organizations to expand
            our service offerings and deliver comprehensive solutions to clients. Over 85 strategic
            alliances, with world-leading companies, enable us to provide complete data and AI
            solutions to your business and IT challenges.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12'>
          {logos.map((logo) => {
            return (
              <div key={logo.id} className='flex justify-center items-center border'>
                <img src={logo.image} alt={logo.id} className='object-cover' />
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
}

const logos = [
  {
    id: 'microsoft',
    image: '/images/logo/microsoft.jpg',
  },
  {
    id: 'aws',
    image: '/images/logo/AWS.jpg',
  },
  {
    id: 'google-cloud',
    image: '/images/logo/google-cloud.jpg',
  },
  {
    id: 'proxmox',
    image: '/images/logo/proxmox.png',
  },
  {
    id: 'Sophos',
    image: '/images/logo/Sophos.png',
  },
  {
    id: 'trend-micro',
    image: '/images/logo/trend-micro.jpg',
  },
];
