import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MiniHeader from '../components/shared/Header/MiniHeader';
import Navbar from '../components/shared/Header/Navbar';
import Footer from '../components/shared/Footer/Footer';
import FooterBottom from '../components/shared/Footer/FooterBottom';

const Main = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* <MiniHeader /> */}
      <Navbar />
      <Outlet />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default Main;
