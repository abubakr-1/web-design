export const gridAnimation = {
  hidden: {
    scale: 1,
    rotate: -12,
  },
  show: {
    rotate: -16,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const gridItemsAnimation = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      repeat: Infinity,
      repeatDelay: 1.4,
      duration: 0.3,
      repeatType: "reverse",
      type: "spring",
    },
  },
};

export const squareAnimation = {
  hidden: {
    rotate: 12,
    borderRadius: 10,
  },
  show: {
    borderRadius: 60,
    rotate: 12,
    transition: {
      repeat: Infinity,
      duration: 0.5,
      repeatDelay: 0.5,
      repeatType: "reverse",
    },
  },
};

export const showOnScroll = {
  hidden: {
    opacity: 0,
    scale: 1.3,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
};
export const moveOnScroll = {
  hidden: {
    opacity: 1,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
};
export const waveAnimation = {
  hidden: {
    zIndex: 1,
    opacity: 0,
    scale: 1.5,
  },
  show: {
    zIndex: -1,
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
    },
  },
  exit: {
    zIndex: 1,
    opacity: 0,
    scale: 1.5,
  },
};

export const transitionOnScroll = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
