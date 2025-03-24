import React from 'react';
import './LoadingPage.css';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/hasufolio');
    }, 1700);
    return () => clearTimeout(timer);
  }, [navigate]);
  const [progress, setProgress] = React.useState(0);
  const [loadingText, setLoadingText] = React.useState('Initializing...');
  const [loadingSubtext] = React.useState('Starting up...');
  const [loadingDots] = React.useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
      setLoadingText(() => {
        if (progress >= 90) return 'Welcome To HasuFolio';
        if (progress >= 70) return 'Optimizing performance...';
        if (progress >= 50) return 'Finishing up...';
        if (progress >= 30) return 'Loading resources...';
        if (progress >= 10) return 'Initializing components...';
        return 'Starting up...';
      });
    }, 10);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{loadingText} {progress}%</p>
      <p className="loading-subtext">{loadingSubtext}{loadingDots}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default LoadingPage;