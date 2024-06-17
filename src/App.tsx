import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';

const App = () => {

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);


  return (
    <div className='appContainer'>
      <HomePage />
    </div>
  );
}

export default App;
