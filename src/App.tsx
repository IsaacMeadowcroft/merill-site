import React, { useEffect, useState } from 'react';
import {NavBar, Home, Prints, Portfolio, About, Contact} from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function App(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function handleScroll() {
    setScrollPosition(window.pageYOffset);
  }

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [dimensions]);


  return (
    <QueryClientProvider client={client}>
      <NavBar dimensions={dimensions} scrollPosition={scrollPosition}/>
      <Home dimensions={dimensions} scrollPosition={scrollPosition}/>
      <Prints dimensions={dimensions} scrollPosition={scrollPosition}/>
      <Portfolio dimensions={dimensions} scrollPosition={scrollPosition}/>
      <About dimensions={dimensions} scrollPosition={scrollPosition}/>
      <Contact dimensions={dimensions} scrollPosition={scrollPosition}/>
    </QueryClientProvider>
  )
}

export default App;
