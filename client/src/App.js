import Router from './Components/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flowbite } from 'flowbite-react';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    function applyLightTheme() {
      document.documentElement.classList.remove('dark');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQuery.matches) {
      applyLightTheme();
    }

    function handleChange(e) {
      if (e.matches) {
        applyLightTheme();
      }
    }

    mediaQuery.addEventListener('change', handleChange);

    // Cleanup function
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Define your theme object here if needed
  // const theme = {...};

  return (
    <Flowbite theme={{ dark: false }}>
      <Router />
    </Flowbite>
  );
}

export default App;
