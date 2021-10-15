import React, { useEffect, useState } from "react";
import {
  NavBar,
  Home,
  Prints,
  Portfolio,
  About,
  Contact,
  Cart,
} from "./components/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/merill-bobotis">
            <NavBar dimensions={dimensions} scrollPosition={scrollPosition} />
            <Home dimensions={dimensions} scrollPosition={scrollPosition} />
            <Prints dimensions={dimensions} scrollPosition={scrollPosition} />
            <Portfolio
              dimensions={dimensions}
              scrollPosition={scrollPosition}
            />
            <About dimensions={dimensions} scrollPosition={scrollPosition} />
            <Contact dimensions={dimensions} scrollPosition={scrollPosition} />
          </Route>
          <Route path="/merill-bobotis/Cart">
            <Cart dimensions={dimensions} scrollPosition={scrollPosition}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
