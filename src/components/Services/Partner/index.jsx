import { lazy } from 'react';

const Ourpartner = lazy(() => import('./Ourpartner'));
const Slider = lazy(() => import('./Slider'));

export default function Partner() {
  return (
    <div className=''>
      <Ourpartner />
      {/* slider */}
      <Slider />
    </div>
  );
}
