import { lazy } from 'react';

const Artificial = lazy(() => import('./Artificial'));
const Business = lazy(() => import('./Business'));
const Future = lazy(() => import('./Future'));

export default function Overview() {
  return (
    <>
      <Business />
      <Future />
      <Artificial />
    </>
  );
}
