import React from 'react';
import { motion } from 'framer-motion';


export default function About() {
  return (
    <section id="about" className="about py-5 text-center">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a passionate Full Stack Developer pursuing a B.A. in Tamil at Poompuhar College, Melaiyur. 
          I specialize in building responsive web apps using the MERN stack and love creating elegant front-end designs.
        </motion.p>

        <motion.div
          className="about-qualifications mt-4 p-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h4>Qualifications</h4>
          <ul className="list-unstyled text-light mt-2">
            <li>B.A. Tamil — Poompuhar College, Melaiyur</li>
            <li>Full Stack Developer — MERN Stack</li>
            <li>Frontend Specialist — React, Bootstrap, CSS3</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
