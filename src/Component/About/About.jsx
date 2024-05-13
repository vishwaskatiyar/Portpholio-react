import { useEffect, useState } from "react";
import Service from "./Servicesss";
import Testimonial from "./Testimonial";
const serviceData = [
  {
    title: "Web design",
    icon: "/images/icon-design.svg",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    title: "Web development",
    icon: "/images/icon-dev.svg",
    description: "High-quality development of sites at the professional level.",
  },
  {
    title: "Mobile apps",
    icon: "/images/icon-app.svg",
    description: "Professional development of applications for Android.",
  },
  {
    title: "Photography",
    icon: "/images/icon-photo.svg",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

const About = () => {
  const [testimonial, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json").then((res) =>
      res.json().then((data) => {
        setTestimonials(data);
      })
    );
  }, []);

  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          As a front-end developer adept in HTML, CSS, JavaScript, and React, I
          specialize in sculpting mesmerizing digital landscapes where
          creativity meets functionality. From fluid user interfaces to adaptive
          web designs, my portfolio showcases a harmonious blend of innovation
          and usability. Step into the dynamic world I've crafted at the nexus
          of design and technology, where every pixel tells a compelling story
          and every interaction sparks delight.
        </p>
        <p>
          Crafting digital experiences with precision and finesse, I'm a
          front-end developer fluent in HTML, CSS, JavaScript, and React. My
          portfolio is a testament to the seamless integration of design
          elegance and interactive ingenuity. Whether it's building intuitive
          user interfaces or breathing life into responsive web applications, I
          thrive on pushing the boundaries of possibility. Explore the immersive
          realms I've fashioned, where innovation converges with imagination,
          beckoning users on a journey of discovery and delight.
        </p>
      </section>
      <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {serviceData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-titles">Testimonials</h3>
        <br />
        <ul className="testimonials-list has-scrollbar">
          {testimonial.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Services</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/download (1).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download (2).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download (3).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download (4).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download (6).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download (5).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download (7).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download (8).png" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="images/download.png" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
