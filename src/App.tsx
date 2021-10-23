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
import { TShopItem, Size } from "./components/Interfaces";

const getProducts = async (): Promise<TShopItem[]> =>
  await (await fetch("http://127.0.0.1:8080/getShopItems")).json();

function App(): JSX.Element {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const localStorageCartRequest = localStorage.getItem("userCart");
  const [cartItems, setCartItems] = localStorageCartRequest
    ? useState(new Map<string, number>(JSON.parse(localStorageCartRequest)))
    : useState(new Map<string, number>());
  const { data, isLoading, error } = useQuery<TShopItem[]>(
    "products",
    getProducts
  );

  function handleScroll() {
    setScrollPosition(window.pageYOffset);
  }

  function handleResize() {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  function addCartItem(id: number, size: Size) {
    const cartItemCount = cartItems.get(JSON.stringify({ id, size }));
    if (cartItemCount) {
      setCartItems(
        cartItems.set(JSON.stringify({ id, size }), cartItemCount + 1)
      );
    } else {
      setCartItems(cartItems.set(JSON.stringify({ id, size }), 1));
    }
    localStorage.userCart = JSON.stringify(Array.from(cartItems.entries()));
    localStorage.setItem("userCart", localStorage.userCart);
  }

  function minusCartItem(id: number, size: Size) {
    const cartItemCount = cartItems.get(JSON.stringify({ id, size }));
    if (cartItemCount != undefined) {
      if (cartItemCount > 1) {
        setCartItems(
          cartItems.set(JSON.stringify({ id, size }), cartItemCount - 1)
        );
      } else if (cartItemCount == 1) {
        cartItems.delete(JSON.stringify({ id, size }));
        setCartItems(cartItems);
      }
    }
    localStorage.userCart = JSON.stringify(Array.from(cartItems.entries()));
    localStorage.setItem("userCart", localStorage.userCart);
  }

  function removeCartItem(id: number, size: Size) {
    cartItems.delete(JSON.stringify({ id, size }));
    setCartItems(cartItems);
    localStorage.userCart = JSON.stringify(Array.from(cartItems.entries()));
    localStorage.setItem("userCart", localStorage.userCart);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [dimensions]);

  if (error) {
    return <div>Something went wrong... </div>;
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/merill-site">
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
                cartItems={cartItems}
                addCartItem={addCartItem}
                minusCartItem={minusCartItem}
                removeCartItem={removeCartItem}
              />
            )}
            <Portfolio
              dimensions={dimensions}
              scrollPosition={scrollPosition}
            />
            <About dimensions={dimensions} scrollPosition={scrollPosition} />
            <Contact dimensions={dimensions} scrollPosition={scrollPosition} />
          </Route>
          <Route path="/merill-site/Cart">
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
                addCartItem={addCartItem}
                minusCartItem={minusCartItem}
                removeCartItem={removeCartItem}
              />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
