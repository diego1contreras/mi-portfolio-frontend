import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(() => { //Lee el estado del tema desde el local storage y sino es true por defecto
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme !== null ? JSON.parse(savedTheme) : true;
  });

  // Establecemos el tema al carga la pagina
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toogleTheme = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  }

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}>
      <NavBar />
      <div className='container mt-5'>
        <button className='theme-toggle-button' onClick={toogleTheme}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon}/>
        </button>
      </div>
    </div>
  );
}

export default App;
