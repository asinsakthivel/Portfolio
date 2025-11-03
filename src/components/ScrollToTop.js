import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'react-bootstrap-icons';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      onClick={scrollToTop}
      className="scroll-to-top"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUpCircle size={45} color="#7f5af0" />
    </motion.div>
  );
}
