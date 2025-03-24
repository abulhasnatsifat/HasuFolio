import React from 'react';
import CTA from './CTA';
import './header.css';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2 className="header__name">Hasnat Sifat</h2>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
        <FaArrowRight/>
        </a>
      </div>
    </header>
  );
};

export default Header;
