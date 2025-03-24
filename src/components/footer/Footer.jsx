import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Icon1 from '../../assets/Icon1.svg';
import Icon2 from '../../assets/Icon2.svg';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo"> Hasnat Sifat</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/hasnatsifatofc/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/abulhasnatsifat" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/abulhasnatsifat128" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://trendesh.netlify.app/" target="_blank" rel="noreferrer">
        <img src={Icon1} alt="Tredesh" style={{ width: '24px', height: '24px' }} />
    </a>
    <a href="https://dreamvibejournal.netlify.app/" target="_blank" rel="noreferrer"> 
        <img src={Icon2} alt="Dream Vibe Journal" style={{ width: '24px', height: '24px' }} />
      </a>
      </div>
      
 
      <div className="footer__copyright">
        <small>&copy; HasuFolio 2025. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer