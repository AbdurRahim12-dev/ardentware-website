import Hero from '../components/Home/Hero';
import Press_Release from '../components/Home/Press_Release';
// import Driving_Future from '../components/Home/Driving_Future';
// import Case_Studies from '../components/Home/Case_Studies';
// import Pertnering from '../components/Home/Pertnering';
// import News from '../components/Home/News';
// import Drive_Career from '../components/Home/Drive_Career';
import Questions_Form from '../components/Home/Questions_Form';
// import Our_Partners from '../components/Home/Our_Partners';
import SoftwareDriven from '../components/Home/SoftwareDriven';
import Technology from '../components/Home/Technology';
import TechnologySlider from '../components/Home/TechnologySlider';

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
