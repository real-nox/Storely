import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Homepage";
import Iteminfo from "./pages/Itempage";

import "./css/Home.css";
import "./css/Item.css";

type Type = "home" | "item" | "cart" | "admin";

export default function Homepage({ Type }: { Type: Type }) {
  const [inCart, setinCart] = useState(1);

  useEffect(() => {
    ((Type === "item" || Type === "admin" || Type === "cart") &&
      setinCart(0)) ||
      (Type === "home" && setinCart(1));
  }, [Type]);

  const renderPage = () => {
    if (Type === "home") return <Home />;
    if (Type === "item") return <Iteminfo />;
  };
  return (
    <div className="home">
      <Header inCart={inCart} setinCart={setinCart} />
      {renderPage()}
      <Footer />
    </div>
  );
}
