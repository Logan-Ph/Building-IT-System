import Router from './Components/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Flowbite } from 'flowbite-react';

// Create a theme context
const ThemeContext = createContext();

// Use this hook to access theme in components
export function useTheme() {
  return useContext(ThemeContext);
}

function App() {
  const [theme, setTheme] = useState('light'); // Default theme is light

  useEffect(() => {
    // Check local storage for theme
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme); // Set the theme from local storage or default to light
    document.querySelector('html').classList.toggle('dark', storedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Persist theme changes to local storage
    localStorage.setItem('theme', theme);
    document.querySelector('html').classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    // <Flowbite theme={{ dark: false }}>
    //   <>
    //     <Router />
    //   </>
    // </Flowbite>

    <Flowbite>
      <>
        <Router />
      </>
    </Flowbite>
  );
}
export default App;