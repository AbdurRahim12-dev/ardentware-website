import { lazy } from 'react';

const Header = lazy(() => import('../components/Services/Header'));
const Overview = lazy(() => import('../components/Services/overview'));
const Offering = lazy(() => import('../components/Services/Offer'));
const Service_Hero = lazy(() => import('../components/Services/Service_Hero'));
const ServiceNavbar = lazy(() => import('../components/Services/ServiceNavbar'));
const Video = lazy(() => import('../components/Services/video/Video'));
const Insights = lazy(() => import('../components/Services/Insights'));
const AICaseStudies = lazy(() => import('../components/Services/AICaseStudies'));
const Partner = lazy(() => import('../components/Services/Partner'));
const Services = lazy(() => import('../components/Services/Services'));
const LeadershipProfile = lazy(() => import('../components/Services/LeadershipProfile'));
const ServiceContactUs = lazy(() => import('../components/Services/ServiceContactUs'));


const ServicesPage = () => {
  return (
    <>
      <Header />
      <Service_Hero />
      <ServiceNavbar />
      
      <div id='overview'>
        <Overview />
      </div>
      <div id='video'>
        <Video />
      </div>
      <div id='offer'>
        <Offering />
      </div>
      <div id='insights'>
        <Insights />
      </div>
      <div id='case-studies'>
        <AICaseStudies />
      </div>
      <div id='partner'>
        <Partner />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='leadership'>
        <LeadershipProfile />
      </div>
      <div id='service-contact'>
        <ServiceContactUs />
      </div>
    </>
  );
};

export default ServicesPage;
