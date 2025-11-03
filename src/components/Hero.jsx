import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero text-center d-flex align-items-center">
      <div className="container">
        <motion.img
          src={profile}
          alt="Asin"
          className="hero-img mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="display-5 fw-bold"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Asin Sakthivel
        </motion.h1>

        <motion.p
          className="lead text-secondary"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Full Stack Developer | React, Node.js, MongoDB | Passionate about UI/UX Design
        </motion.p>

        <div className="hero-buttons mt-4">
          <motion.a
            href="https://www.linkedin.com/in/asin-sathivel-0b6952365"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>

          {/* 👇 This will open your resume in a new tab */}
          <motion.a
            href="/fullstack_Asinsakthivel_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
