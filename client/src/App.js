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

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      applyLightTheme();
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (e.matches) {
        applyLightTheme();
      }
    });
  }, []);
  return (
    <Flowbite theme={{ theme, dark: false }}>
      <>
        <Router />
      </>
    </Flowbite>

  );
}
export default App;