export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const imageVariants = {
  initial: {
    filter: "blur(8px)",
    scale: 1.1,
  },
  animate: {
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
