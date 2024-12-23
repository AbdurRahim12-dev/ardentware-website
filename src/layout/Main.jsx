import { Outlet } from "react-router-dom";
import MiniHeader from "../components/shared/Header/MiniHeader";
import Navbar from "../components/shared/Header/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <MiniHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
