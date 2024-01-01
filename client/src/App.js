import Router from './Components/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flowbite } from 'flowbite-react';
import React, { useEffect } from 'react';
import "./App.css"

function App() {
  useEffect(() => {
    // Always remove the 'dark' class from the HTML tag
    document.querySelector('html').classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Set the theme in localStorage to 'light'


    
    // Function to be executed when the "dark" class in the HTML tag changes
    const handleDarkModeChange = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const htmlElement = document.querySelector('html');
          if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark'); // Remove 'dark' class if it's added
          }
        }
      }
    };

    // Create a new MutationObserver
    const htmlElement = document.querySelector('html');
    const observer = new MutationObserver(handleDarkModeChange);

    // Observe changes in the "class" attribute of the HTML tag
    observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });

  }, []);


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