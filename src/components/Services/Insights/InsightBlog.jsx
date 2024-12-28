import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Insights() {
  return (
    <section>
      {/* BUSINESS INTELLIGENCE */}
      <div className=' px-4 py-12 sm:px-6 lg:px-8 bg-[#e8e8e6]'>
        <div className='space-y-10 container'>
          <div className='space-y-9'>
            <h2 className='text-sm font-semibold tracking-wide uppercase relative inline-block '>
              BUSINESS INTELLIGENCE
              <div className='absolute -bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-[#006fba] to-[#21fceb]' />
            </h2>
          </div>

          <h1 className='text-[2.8rem] font-semibold font-gellix text-navy-900'>Recently published insights</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {insights.map((insight, index) => (
              <Link
                key={index}
                href={insight.link}
                className='group bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:drop-shadow-lg'
              >
                <div className='relative h-48 w-full overflow-hidden '>
                  <img src={insight.image} alt={insight.title} fill className='object-cover w-full h-full' />
                </div>
                <div className='p-6 space-y-4'>
                  <h3 className='text-xl font-semibold font-gellix text-blue-600 group-hover:text-blue-700 transition-colors duration-200'>
                    {insight.title}
                  </h3>
                  <p className='text-primary text-md font-semibold '>{insight.description}</p>
                  <div className='flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-200'>
                    <span className='text-md font-medium'>Know more</span>
                    <BiRightArrow className="size-5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const insights = [
  {
    title: 'Cognizant leaders on the tech trends that will define 2025',
    description:
      'From industries under pressure to hot growth regions to workforce trends, our ex...',
    image:
      'https://cognizant.scene7.com/is/image/cognizant/tech-trends-2025_banner?wid=600&fit=wrap',
    link: '#',
  },
  {
    title: 'Flying smarter: 3 ways AI will improve airline mobile apps i...',
    description:
      'We explore three cutting-edge AI strategies that leading airlines are embracing ...',
    image:
      'https://cognizant.scene7.com/is/image/cognizant/3-ways-ai-is-improving-airline-apps-banner?wid=600&fit=wrap',
    link: '#',
  },
  {
    title: 'Gen AI in Canada: Embracing the future with confidence',
    description:
      'Canadian businesses show high levels of investment and enthusiasm for generative...',
    image:
      'https://cognizant.scene7.com/is/image/cognizant/canada-generative-ai-adoption_banner?wid=600&fit=wrap',
    link: '#',
  },
];
