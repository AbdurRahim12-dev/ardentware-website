import { Outlet } from "react-router-dom";
import MiniHeader from "../shared/Header/MiniHeader";
import Navbar from "../shared/Header/Navbar";
import Footer from "../shared/Footer/Footer";

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
