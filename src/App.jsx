import MiniHeader from "./components/shared/Header/MiniHeader";
import Navbar from "./components/shared/Header/Navbar";
import Hero from "./components/Home/Hero";
import Press_Release from "./components/Home/Press_Release";
import Driving_Future from "./components/Home/Driving_Future";
import Case_Studies from "./components/Home/Case_Studies";

function App() {
  return (
    <>
      <MiniHeader />
      <Navbar />
      <Hero />
      <Press_Release />
      <Driving_Future />
      <Case_Studies />
    </>
  );
}

export default App;
