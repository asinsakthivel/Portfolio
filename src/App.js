import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './Footer.css'; // Add this line
import ScrollToTop from './components/ScrollToTop';
import './App.css';
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Nav />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        © {new Date().getFullYear()} Asin Sakthivel — Built with React
      </footer>
     
    </div>
  );
}
