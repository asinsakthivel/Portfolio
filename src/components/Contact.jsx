import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <h2 className="section-title" data-aos="fade-down">
        Contact Me
      </h2>
      <p className="contact-text" data-aos="fade-up" data-aos-delay="200">
        I’d love to connect! Whether it’s about collaborations, projects, or just saying hi — feel free to reach out.
      </p>

      <div className="contact-info" data-aos="zoom-in" data-aos-delay="300">
        <p>
          📧 Email:{" "}
          <a href="mailto:asinsakthivel0033@gmail.com">
            asinsakthivel0033@gmail.com
          </a>
        </p>
      </div>

      <div className="social-links" data-aos="fade-up" data-aos-delay="400">
        <a
          href="https://github.com/asinsakthivel"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/asin-sathivel-0b6952365"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
