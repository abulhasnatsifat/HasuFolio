import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Welcome from './components/Welcome/Welcome';
import LoadingPage from './components/LoadingPage/LoadingPage';
import HasuFolio from './components/HasuFolio/HasuFolio';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/hasufolio" element={<HasuFolio />} />
      </Routes>
    </Router>
  );
}

export default App;