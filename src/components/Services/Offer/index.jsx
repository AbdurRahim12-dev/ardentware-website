import { lazy } from 'react';

const Offerings = lazy(() => import('./Offerings'));
const Accordion = lazy(() => import('./Accordin'));
const AIGovernance = lazy(() => import('./AIGovernance'));

export default function Offering() {
  return (
    <>
      <Offerings />
      <Accordion />
      <AIGovernance />
    </>
  );
}
