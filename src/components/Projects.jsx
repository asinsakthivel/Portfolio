import React from "react";
import ProjectCard from "./ProjectCard";

// ✅ Import all images directly from assets folder
import proj1 from "../assets/project1.png";
import proj2 from "../assets/project2.png";
import proj3 from "../assets/project3.png";
import proj4 from "../assets/project4.png";
import proj5 from "../assets/project5.png";
import projShoes from "../assets/step-by-step-shop.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Amazon Clone (MERN)",
      description:
        "A full-featured e-commerce platform built with the MERN stack. Includes product listings, detailed product pages, user authentication, admin dashboard, and Stripe payment integration. MongoDB stores all user and product data securely. Designed with React for a modern shopping experience.",
      image: proj1,
      githubUrl: "https://github.com/asinsakthivel/Amazon-clone",
     
    },
    {
      id: 2,
      title: "Happy Calculator Web App",
      description:
        "A React-based calculator with user and admin login/registration pages. Built using React, Node.js, Express, and MongoDB for a seamless user experience. Features secure authentication, custom CSS design, and a smooth UI for performing calculations and managing user sessions.",
      image: proj2,
      githubUrl: "https://github.com/asinsakthivel/Happy_Calculator_web",
    },
    {
      id: 3,
      title: "Adventure Travel Website",
      description:
        "An interactive travel booking platform developed with the MERN stack. Allows users to browse packages, view itineraries, book adventures, and read travel tips. Admin dashboard for managing packages and bookings. Styled using React and Bootstrap with responsive design.",
      image: proj3,
      githubUrl: "https://github.com/asinsakthivel/Adventure_travel_web",
    },
    {
      id: 4,
      title: "3D Solar System Simulation",
      description:
        "A Three.js-powered 3D solar system simulation that visualizes planet orbits around the Sun. Includes rotation, orbit speed controls, and elegant animations using WebGL. Designed to be mobile-friendly with a futuristic dark UI and soft glowing effects.",
      image: proj4,
      githubUrl: "https://github.com/asinsakthivel/Solar_system",
    },
    {
      id: 5,
      title: "Grocery list with calculator",
      description:
        "This JavaScript-powered web application serves as an interactive Grocery List and Calculator. It allows users to input items with a name, price, and quantity. The application dynamically updates a list, automatically calculates the total amount owed, and tracks a balance against a set budget (highlighting overspent amounts in red).",
      image: proj5,
      githubUrl: "https://github.com/asinsakthivel/Grocery_list_with_calculator",
    },
    {
      id: 6,
      title: "Step by Step — Shoe Shopping ",
      description:
        "A lightweight front-end shopping demo built with plain JavaScript, CSS and HTML. Replicates a small e-commerce storefront where users can browse shoes, add items to a cart, update quantities, and view order totals. The UI includes product cards, a floating cart preview, and smooth CSS animations for a polished, interactive experience.",
      image: projShoes,
      githubUrl: "https://github.com/asinsakthivel/shoe_shopping_page",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
