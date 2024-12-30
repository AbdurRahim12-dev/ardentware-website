import { lazy } from 'react';
const Case_Studies_Card = lazy(() => import('../Home/Cards/Case_Studies_Card'));
const Header_Text = lazy(() => import('../ui/Header_Text/Header_Text'));


const AICaseStudies = () => {
  const data = [
    {
      category: 'LIFE SCIENCES',
      title: 'GSK and Amref break down data silos',
      description: 'to improve public health insights and initiatives in sub-Saharan Africa.',
      image: '/images/data-ai/working-with-gsk-casestudy-thumbnail.jpg',
    },
    {
      category: 'INSURANCE',
      title: 'Indian insurer strengthens data privacy',
      description: 'with AI-enabled protection that is faster, scalable and fully compliant.',
      image: '/images/data-ai/insurer-uses-ai-to-protect-biometric-data-casestudy-thumbnail.jpg',
    },
    {
      category: 'MEDIA & ENTERTAINMENT',
      title: 'Engineer AMF1 to act on intuition',
      description: 'to deploy intelligence and drive intelligent decision making.',
      image: '/images/data-ai/engineer-amf1-to-act-on-intuition-case-study.webp',
    },
    {
      category: 'TRAVEL & HOSPITALITY',
      title: "Papa John's delivers with Papa Call",
      description: 'to increase revenue and deliver an exceptional customer experience.',
      image: '/images/data-ai/papa-johns-delivers-with-papa-call-case-study.webp',
    },
  ];
  return (
    <>
      <section
        className='container py-16'
      >
        <Header_Text
          title='Data and AI case studies'
          description="We partner with our clients to drive solutions for their most pressing problems, no matter where you are on your data and AI journey, we'll meet you there"
        />
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-8'>
          {data.map((item) => {
            return <Case_Studies_Card key={item.title} data={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default AICaseStudies;
