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
import { useQuery } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { CartItem, ShopItemType } from "./components/Interfaces";

const getProducts = async (): Promise<ShopItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [cartData , setCartData] = useState<CartItem[]>([]);

  function handleScroll() {
    setScrollPosition(window.pageYOffset);
  }

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  function addCartItem(id: number, size: number) {
    setCartData([...cartData, {id, size}])
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [dimensions]);

  const { data, isLoading, error } = useQuery<ShopItemType[]>(
    "products",
    getProducts
  );

  if (error) {
    return <div>Something went wrong... </div>;
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/merill-bobotis">
            <NavBar
              dimensions={dimensions}
              scrollPosition={scrollPosition}
            />
            <Home dimensions={dimensions} scrollPosition={scrollPosition} />
            {isLoading? <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> : <Prints
              dimensions={dimensions}
              scrollPosition={scrollPosition}
              data={data}
            /> }
            <Portfolio
              dimensions={dimensions}
              scrollPosition={scrollPosition}
            />
            <About dimensions={dimensions} scrollPosition={scrollPosition} />
            <Contact dimensions={dimensions} scrollPosition={scrollPosition} />
          </Route>
          <Route path="/merill-bobotis/Cart">
            {isLoading? <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> : <Cart
              dimensions={dimensions}
              scrollPosition={scrollPosition}
              data={data}
            />}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
