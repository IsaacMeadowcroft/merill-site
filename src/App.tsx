import React, { useEffect, useState } from "react";
import {
  NavBar,
  Home,
  Prints,
  Portfolio,
  About,
  Cart,
  Contact,
  Footer,
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
  // eslint-disable-next-line prefer-const
  let { data, isLoading, error } = useQuery<TShopItem[]>(
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
    data = new Array<TShopItem>();
    data.push(
      {
        id: 1,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51616325094_6ba145bc43_h_d.jpg",
        price: 50,
        title: "Cloak",
      },
      {
        id: 2,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51616325104_90be9f78b4_h_d.jpg",
        price: 50,
        title: "Blindfolded",
      },
      {
        id: 3,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51615890498_e168f54bda_h_d.jpg",
        price: 50,
        title: "Flowers",
      },
      {
        id: 4,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51615890538_c30f936353_o_d.jpg",
        price: 50,
        title: "Despair",
      },
      {
        id: 5,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51614834452_218a764dc0_o_d.jpg",
        price: 50,
        title: "Lake",
      },
      {
        id: 6,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51616537440_8be2d34228_o_d.jpg",
        price: 50,
        title: "Sin",
      },
      {
        id: 7,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51615668996_996edf8d43_o_d.jpg",
        price: 50,
        title: "Pain",
      },
      {
        id: 8,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51616325149_b3443969ea_o_d.jpg",
        price: 50,
        title: "Insight",
      },
      {
        id: 9,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51616325084_f45bb8d167_o_d.jpg",
        price: 50,
        title: "Freedom",
      },
      {
        id: 9,
        description: "...",
        image:
          "https://live.staticflickr.com/65535/51615669001_f560d30667_o_d.jpg",
        price: 50,
        title: "Horror",
      }
    );
  }

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
          <Portfolio dimensions={dimensions} scrollPosition={scrollPosition} />
          {isLoading ? (
            <div
              className="w-100 d-flex flex-row justify-content-center"
              style={{ backgroundColor: "rgb(20,20,20)" }}
            >
              <Spinner animation="border" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
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
          <Contact dimensions={dimensions} scrollPosition={scrollPosition} />
          <About dimensions={dimensions} scrollPosition={scrollPosition} />
          <Footer />
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

export default App;
