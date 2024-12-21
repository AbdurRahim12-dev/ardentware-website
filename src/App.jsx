import MiniHeader from "./components/shared/Header/MiniHeader";
import Navbar from "./components/shared/Header/Navbar";
import Hero from "./components/Home/Hero";
import Press_Release from "./components/Home/Press_Release";
import Driving_Future from "./components/Home/Driving_Future";
import Case_Studies from "./components/Home/Case_Studies";
import Pertnering from "./components/Home/Pertnering";
import News from "./components/Home/News";
import Drive_Career from "./components/Home/Drive_Career";
import Questions_Form from "./components/Home/Questions_Form";

function App() {
  return (
    <>
      <MiniHeader />
      <Navbar />
      <Hero />
      <Press_Release />
      <Driving_Future />
      <Case_Studies />
      <Pertnering />
      <News />
      <Drive_Career />
      <Questions_Form />
    </>
  );
}

export default App;
