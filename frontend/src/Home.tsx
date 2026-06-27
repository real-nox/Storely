import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Homepage";
import Iteminfo from "./pages/Itempage";
import NotFound from "./pages/NotFound";

import "./css/Home.css";
import "./css/Item.css";
import "./css/Notfound.css";

type Type = "home" | "item" | "cart" | "admin" | "notfound";

export type CartItem = {
  id_products: number[];
};

export type SetCartItem = Dispatch<SetStateAction<CartItem>>;

export default function Homepage({ Type }: { Type: Type }) {
  const [inCart, setinCart] = useState(1);
  const [cartItems, setCartItem] = useState<CartItem>({
    id_products: [],
  });

  useEffect(() => {
    //window.localStorage.setItem("products_inCart", String(cartItems));
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    ((Type === "item" ||
      Type === "admin" ||
      Type === "cart" ||
      Type === "notfound") &&
      setinCart(0)) ||
      (Type === "home" && setinCart(1));
  }, [Type]);

  const renderPage = () => {
    if (Type === "home") return <Home setCartItem={setCartItem} />;
    if (Type === "item") return <Iteminfo />;
    if (Type === "notfound") return <NotFound />;
  };
  return (
    <div className="home">
      <Header inCart={inCart} setinCart={setinCart} />
      {renderPage()}
      <Footer />
    </div>
  );
}
