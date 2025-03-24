import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import welcomegif from '../../assets/welcome.gif';
import welcomegif1 from '../../assets/welcome1.gif';
import welcomegif2 from '../../assets/welcome2.gif';
import welcomegif3 from '../../assets/welcome3.gif';
import welcomegif4 from '../../assets/welcome4.gif';
import welcomegif5 from '../../assets/welcome5.gif';
import welcomegif6 from '../../assets/welcome6.gif';
import welcomegif7 from '../../assets/welcome7.gif';
import welcomegif8 from '../../assets/welcome8.gif';
import welcomegif9 from '../../assets/welcome9.gif';
import welcomegif10 from '../../assets/welcome10.gif';
import { FaUser, FaCode, FaTools, FaBriefcase } from 'react-icons/fa';

function App() {
  const navigate = useNavigate();
  const gifs = [welcomegif, welcomegif1, welcomegif2, welcomegif3, welcomegif4, welcomegif5, welcomegif6, welcomegif7, welcomegif8, welcomegif9, welcomegif10];
  const [currentgifIndex, setCurrentgifIndex] = React.useState(0);

  React.useEffect(() => {
    // Set random gif index on initial load
    setCurrentgifIndex(Math.floor(Math.random() * gifs.length));
    
    const interval = setInterval(() => {
      setCurrentgifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gifs.length]);
  return (
    <div className="portfolio-container">
      <div className="left-side">
        <h1><FaUser />  Hi I'm Hasnat Sifat</h1>
        <h2><FaCode /> The App & Web Developer</h2>
        <p><FaTools /> I build modern, scalable, and user-friendly websites & applications.</p>
        <div className="cta-buttons">
          <button onClick={() => navigate('/loading')}><FaBriefcase />  View HasuFolio</button>
        </div>
      </div>
      <div className="right-side">
        <img 
          src={gifs[currentgifIndex]} 
          alt="Hasnat Sifat"
          style={{ transition: 'opacity 1s ease-in-out' }}
          className={currentgifIndex === 0 ? 'fade-in' : 'fade-out'}
        />
      </div>
    </div>
  );
}

export default App;