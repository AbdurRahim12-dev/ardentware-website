import React, { useMemo } from 'react';
import SoftwareDrivenCard from './SoftwareDrivenCard';

export default function SoftwareDriven() {
  const data = useMemo(() => {
    return [
      {
        title: 'Step Into the Software-Driven Era',
        description:
          'Unlock new possibilities with innovative software solutions designed to fuel your business growth in the digital age.',
        video: '/videos/web-car.mp4',
        // imageUrl: '/images/videoframe_6013.png',
      },
      {
        title: 'AI-Driven Cloud Transformation for Every Industry',
        description:
          'Revolutionize your business operations with tailored cloud solutions powered by industry expertise and artificial intelligence.',
        video: '/videos/marelli-tile.mp4',
        // imageUrl: '/images/videoframe_2623.png',
      },
      // {
      //   title: 'Master Cloud Economics & Harness the Power of AI',
      //   description: 'An Insight Report by Wipro FullStride Cloud & Forbes.',
      //   video: 'https://www.wipro.com/content/dam/nexus/en/wipro-butterfly-effect-header.mp4#t=0.1',
      //   // imageUrl: '/images/videoframe_1615.png',
      // },
      // {
      //   title: 'Impact in Action',
      //   description: 'How small action can yield outsized sustainability results.',
      //   video: 'https://www.wipro.com/content/dam/nexus/en/wipro-butterfly-effect-header.mp4#t=0.1',
      //   // imageUrl: '/images/videoframe_1615.png',
      // },
    ];
  }, []);
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      {data.map((item) => (
        <div key={item.title} className=''>
          <SoftwareDrivenCard  {...item} />
        </div>
      ))}
    </div>
  );
}

