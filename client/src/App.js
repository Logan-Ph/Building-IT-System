import Router from './Components/Router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flowbite } from 'flowbite-react';
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
function App() {
  return (
    <Flowbite theme={{ dark: false }}>
      <>
        <Router />
      </>
    </Flowbite>

  );
}
export default App;