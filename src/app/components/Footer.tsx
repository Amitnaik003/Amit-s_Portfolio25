import { motion } from "motion/react";
import { fadeInRight } from "../data/variants";
import React from "react";
import { personalInfo, currentYear } from "../data/data";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-neutral-950 border-t border-neutral-600 text-neutral-100 text-center py-6 "
    >
      <div className="text-sm">
        &copy; {currentYear} {personalInfo.name}. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
