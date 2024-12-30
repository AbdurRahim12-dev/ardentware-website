import { lazy } from 'react';
const InsightBlog = lazy(() => import('./InsightBlog'));
const AIResearch = lazy(() => import('./AIResearch'));

export default function Insights() {
  return (
    <>
      <InsightBlog />
      <AIResearch />
    </>
  );
}
