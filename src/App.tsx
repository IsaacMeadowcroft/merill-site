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
import { CartItem, ShopItemType, Size } from "./components/Interfaces";

const getProducts = async (): Promise<ShopItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [cartItems, setCartItems] = useState(new Map<CartItem, number>());

  function handleScroll() {
    setScrollPosition(window.pageYOffset);
  }

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  function addCartItems(id: number, size: Size) {
    const cartItemCount = cartItems.get({ id, size });
    if (cartItemCount) {
      setCartItems(cartItems.set({ id, size }, cartItemCount + 1));
    } else {
      setCartItems(cartItems.set({ id, size }, 1));
    }
  }

  function removeCartItems(id: number, size: Size) {
    const cartItemCount = cartItems.get({ id, size });
    if (cartItemCount && cartItemCount > 1) {
      setCartItems(cartItems.set({ id, size }, cartItemCount - 1));
    } else if (cartItemCount && cartItemCount == 1) {
      cartItems.delete({ id, size });
      setCartItems(cartItems);
    }
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
              cartItems={cartItems}
            />
            <Home dimensions={dimensions} scrollPosition={scrollPosition} />
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Prints
                dimensions={dimensions}
                scrollPosition={scrollPosition}
                shopItems={data}
              />
            )}
            <Portfolio
              dimensions={dimensions}
              scrollPosition={scrollPosition}
            />
            <About dimensions={dimensions} scrollPosition={scrollPosition} />
            <Contact dimensions={dimensions} scrollPosition={scrollPosition} />
          </Route>
          <Route path="/merill-bobotis/Cart">
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <Cart
                dimensions={dimensions}
                scrollPosition={scrollPosition}
                shopItems={data}
                cartItems={cartItems}
              />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
