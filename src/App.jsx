import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { BiRightArrow } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Footer from "./components/shared/Footer/Footer";

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButtons(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      <Footer />

      {/* Back to top button */}
      <div
        className={`fixed bottom-5 right-5 transition-opacity duration-300 ${
          showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="hidden lg:flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white shadow-md hover:bg-primary/80 focus:outline-none"
        >
          <span>Back to top</span>
          <BiRightArrow className="-rotate-90" />
        </button>
      </div>

      {/* Contact Us button */}
      <div
        className={`fixed top-1/2 -right-10 rotate-90 transition-opacity duration-300 ${
          showButtons ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-white shadow-md hover:bg-accent/80 focus:outline-none"
        >
          <span>Contact Us</span>
        </button>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-primary/60 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="relative bg-white w-full mx-2 md:mx-10 p-6 rounded-lg shadow-xl">
                <div className="absolute top-4 right-4 p-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <IoMdClose />
                  </button>
                </div>

                <Questions_Form />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
