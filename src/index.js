import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./cart/cartContext";

import Modal from "react-modal";
import reportWebVitals from "./reportWebVitals";

Modal.setAppElement("#root");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
reportWebVitals();
