import { Variants } from "framer-motion";

// Use a typed cubic-bezier tuple instead of `any`
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const headerVariants: Variants = {
  initial: { y: -5, opacity: 0, rotateY: 45 },
  whileInView: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
  whileHover: {
    scaleX: 1.01,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

export const liVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.09 },
};

export const tooltipVariants: Variants = {
  rest: { opacity: 0, y: -5, display: "none" },
  hover: { opacity: 1, y: 0, display: "block" },
};

export const fadeInRight: Variants = {
  initial: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
  whileInView: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const fadeInUpRight: Variants = {
  hidden: { opacity: 0, y: 30, x: -30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const fadeInUpLeft: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const fadeInUpDelay: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut, delay: 0.2 },
  },
};

export const rotateYVariant: Variants = {
  initial: { opacity: 0, rotateY: 45 },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: easeOut, delay: 0.4 },
  },
};
