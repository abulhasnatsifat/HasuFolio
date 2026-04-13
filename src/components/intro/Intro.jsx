import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'



const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Hasnat Sifat" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a dedicated and detail-oriented Computer Operator at Nafi IT, responsible for ensuring smooth daily IT operations, system monitoring, data management, and technical support. With strong expertise in hardware & software troubleshooting, MS Office, data entry, and network assistance, I deliver efficient and accurate solutions that help the team stay productive. Passionate about technology and committed to excellence, I thrive in fast-paced environments, optimizing workflows while maintaining high standards of accuracy and confidentiality, and am eager to grow with Nafi IT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
