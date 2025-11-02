"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUpLeft } from "../data/variants";
import { experience } from "@/app/data/data";

const Experience = () => {
  // Simplify the experience array handling
  const expArray = Array.isArray(experience) ? experience : [experience];

  if (!expArray.length) return null;

  return (
    <motion.section
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="bg-neutral-950 w-full mx-auto pb-4 border-b border-neutral-600"
    >
      <div className="space-y-4 text-sm">
        <h2 className="text-lg font-semibold mb-4">Experience</h2>
      </div>

      {expArray.map((item, idx) => (
        <motion.div
          key={idx}
          className="mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 * idx }}
        >
          <div className="space-y-2 text-sm">
            <h3 className="text-neutral-100 flex justify-between items-center">
              <span className="font-semibold">{item.companyName}</span>
              <span>{item.duration}</span>
            </h3>
            <h4 className="text-neutral-100 flex justify-between items-center">
              <span>{item.position}</span>
              <span>{item.location}</span>
            </h4>
          </div>

          <motion.ul
            className="mt-2 space-y-3 text-neutral-100 text-sm"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {item.achievements?.map((point: string, index: number) => (
              <li key={index} className="border-l-2 border-neutral-200 pl-3">
                {point}
              </li>
            ))}
          </motion.ul>

          {idx < expArray.length - 1 && (
            <div className="h-px bg-neutral-700 my-4" />
          )}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;
