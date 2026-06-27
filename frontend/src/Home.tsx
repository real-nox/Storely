import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Homepage";
import Iteminfo from "./pages/Itempage";
import NotFound from "./pages/NotFound";

import "./css/Home.css";
import "./css/Item.css";
import "./css/Notfound.css";

type Type = "home" | "item" | "cart" | "admin" | "notfound";

export default function Homepage({ Type }: { Type: Type }) {
  const [inCart, setinCart] = useState(1);

  useEffect(() => {
    ((Type === "item" || Type === "admin" || Type === "cart" || Type === "notfound") &&
      setinCart(0)) ||
      (Type === "home" && setinCart(1));
  }, [Type]);

  const renderPage = () => {
    if (Type === "home") return <Home />;
    if (Type === "item") return <Iteminfo />;
    if (Type === "notfound") return <NotFound />
  };
  return (
    <div className="home">
      <Header inCart={inCart} setinCart={setinCart} />
      {renderPage()}
      <Footer />
    </div>
  );
}
