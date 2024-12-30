import { lazy } from 'react';

const Hero = lazy(() => import('../components/Home/Hero'));
const Press_Release = lazy(() => import('../components/Home/Press_Release'));
const Questions_Form = lazy(() => import('../components/Home/Questions_Form'));
const SoftwareDriven = lazy(() => import('../components/Home/SoftwareDriven'));
const Technology = lazy(() => import('../components/Home/Technology'));
const TechnologySlider = lazy(() => import('../components/Home/TechnologySlider'));

const HomePage = () => {
  return (
    <>
      <Hero />
      <Press_Release />
      <SoftwareDriven />
      <Technology />
      <TechnologySlider />
      <Questions_Form />
      {/* <Driving_Future /> */}
      {/* <Case_Studies /> */}
      {/* <Pertnering /> */}
      {/* <News /> */}
      {/* <Our_Partners /> */}
      {/* <Drive_Career /> */}
    </>
  );
};

export default HomePage;
