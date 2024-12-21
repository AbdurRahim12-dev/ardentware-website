import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, imageVariants, itemVariants } from "../../Motion/variants";
import { BiRightArrow } from "react-icons/bi";

const Hero = () => {
  const data = useMemo(() => {
    return [
      {
        name: "Age of gen Ai",
        title: "Accelerate and orchestrate experience",
        description:
          "The next generation of hyper-personalized, dynamic experiences for customers, employees and citizens. AI-powered, end-to-end transformation—shaping tomorrow's experiences—today.",
        button: "Find Out More",
        image: "https://cognizant.scene7.com/is/image/cognizant/hp-cybersecurity-hero-desktop",
      },
      {
        name: "Neuro Cybersecurity",
        title: "What to do with the workforce in the age of generative AI?",
        description:
          "It's the trillion dollar question. As gen AI improves productivity and disrupts job roles and the talent pyramid, business leaders must align workforce strategies with the evolving landscape.",
        button: "Submit",
        image: "https://cognizant.scene7.com/is/image/cognizant/hp-ai-impact-hero-desktop",
      },
      {
        name: "Ai Adoption",
        title: "Cybersecurity and compliance orchestration with AI",
        description:
          "Cognizant Neuro® Cybersecurity revolutionizes risk management, threat and vulnerability management and compliance assurance—by integrating and orchestrating point solutions to ensure comprehensive security coverage using AI.",
        button: "Get The Details",
        image: "https://cognizant.scene7.com/is/image/cognizant/hp-hero-cognizant-moment-desktop",
      },
    ];
  }, []);

  const [activeContent, setActiveContent] = useState(data[0]);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = data.findIndex((item) => item.name === activeContent.name);
      const nextIndex = (currentIndex + 1) % data.length;
      setActiveContent(data[nextIndex]);
    }, 8000);

    return () => clearInterval(timer);
  }, [activeContent, data]);

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeContent.image}
          initial="initial"
          animate="animate"
          variants={imageVariants}
          className="w-full h-full"
        >
          <img src={activeContent.image} alt={activeContent.name} className="w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="container text-left text-white flex absolute inset-0 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent.name}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full sm:w-10/12 lg:w-7/12 z-[1] space-y-5"
          >
            <motion.h1 variants={itemVariants} className="text-6xl leading-tight font-semibold">
              {activeContent.title}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg">
              {activeContent.description}
            </motion.p>
            <motion.button
              variants={itemVariants}
              className="bg-secondary text-primary font-semibold px-3 py-2 rounded-full hover:bg-secondary/70 duration-300 inline-flex items-center"
            >
              {activeContent.button} <BiRightArrow />
            </motion.button>
          </motion.div>
        </AnimatePresence>
        <div className="flex space-x-4 absolute bottom-8">
          {data.map((menu, index) => {
            const isActive = activeContent.name === menu.name;
            return (
              <div key={index + 1} className="relative group z-[5]">
                <button
                  className={`font-semibold text-lg px-3 ${isActive ? "text-secondary" : ""}`}
                  onClick={() => {
                    setActiveContent(menu);
                  }}
                >
                  {menu.name}
                </button>
                <span
                  className={`absolute -bottom-2 h-[3px] bg-white opacity-50 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0 ${
                    isActive ? "left-0 w-full" : "left-1/2 w-0"
                  }`}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
