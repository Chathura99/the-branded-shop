import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import './App.css';

import React, { useState } from "react";
import "./App.css";
import Header from "./common/Header/Header";
// import Pages from "./pages/Pages"
// import Data from "./components/Data"
// import Cart from "./common/Cart/Cart"
import Footer from "./common/Footer/Footer";
// import Sdata from "./components/shops/Sdata"

function App() {
  const [CartItem, setCartItem] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header CartItem={CartItem} />
        <Routes>
          {/* <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route> */}

          {/* <Route path="/cart" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
