import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Case_Studies_Card = ({ data }) => {
  const { category, title, description, image } = data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-cover bg-center min-h-[325px] rounded-xl overflow-hidden relative"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="text-white">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="initial"
              initial={{ y: 160 }}
              animate={{ y: 160 }}
              exit={{ y: 400, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-primary/60 p-5"
            >
              <span className="uppercase text-lg underline underline-offset-[15px]">
                {category}
              </span>
              <h3 className="mt-6 text-3xl font-semibold text-secondary line-clamp-2">{title}</h3>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              exit={{ y: 400, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-primary/60 p-5"
            >
              <span className="uppercase text-lg underline underline-offset-[15px]">
                {category}
              </span>
              <h3 className="mt-6 text-3xl font-semibold text-secondary">{title}</h3>
              <p className="mt-5 text-xl">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Case_Studies_Card;
