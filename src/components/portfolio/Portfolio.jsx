import "./portfolio.css";

import IMG1 from "../../assets/Img1.jpg";
import IMG2 from "../../assets/Img2.jpg";
import logo1 from "../../assets/Icon1.svg";
import logo2 from "../../assets/Icon2.svg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Tren._.Desh",
      img: IMG1,
      logo: logo1,
      description:
        "An ecommerce website is a huge interactive platform to present various  products and services to the customers.  ",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://trendesh.netlify.app/",
      github: "https://github.com/abulhasnatsifat/TrenDesh",
    },
    {
      id: 2,
      title: "The Dream Vibe Journal",
      img: IMG2,
      logo: logo2,
      description:
        "A Blogpost Website . It is a simple and easy-to-use platform that helps you to write down your dreams and goals.",
      technologies: "HTML | CSS | JavaScript | Firebase",
      link: "https://dreamvibejournal.netlify.app/",
      github: "https://github.com/abulhasnatsifat/The-Dream-Vibe-Journal",
    }
 

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
       <h3>      <img src={pro.logo} alt="Dream Vibe Journal" style={{ width: '24px', height: '24px' }} /> {pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <br/>  <br/> 
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
