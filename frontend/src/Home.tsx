import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

//PAGES
import Adminpage from "./pages/Adminpage";
import Home from "./pages/Homepage";
import Cart from "./pages/Cartpage";
import Iteminfo from "./pages/Itempage";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";

//CSS
import "./css/Notfound.css";
import "./css/Checkout.css";
import "./css/Cart.css";
import "./css/Home.css";
import "./css/Item.css";
import "./css/Admin.css";

//API
import { getProducts } from "./api/products.api";

//TYPES
import { type Items } from "./components/Item";
import PopUpProduct, { type actions } from "./components/PopupProduct";
type Type = "home" | "item" | "cart" | "admin" | "notfound" | "checkout";

export type CartItem = {
  id_products: { id: number; qte: number }[];
};

export type SetCartItem = Dispatch<SetStateAction<CartItem>>;
export type SetProduct = Dispatch<SetStateAction<Items[]>>;
export type SetAdminType = Dispatch<SetStateAction<actions>>;

export default function Homepage({ Type }: { Type: Type }) {
  const [products, setProduct] = useState<Items[]>([]);

  const [inCart, setinCart] = useState(1);
  const [cartItems, setCartItem] = useState<CartItem>({
    id_products: [],
  });

  const [adminType, setAdminType] = useState<actions>({
    product: {
      category: "",
      description: "",
      icon: "",
      id: "",
      isPromo: false,
      name: "",
      price: 0,
      qte: 0,
    },
    type: "",
  });
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  useEffect(() => {
    const getListProducts = async () => {
      const result = await getProducts();
      if (!result) return
      setProduct(result);
    };
    getListProducts();

    const stored = localStorage.getItem("products_inCart");
    if (stored) setCartItem(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("products_inCart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    ((Type === "item" ||
      Type === "admin" ||
      Type === "notfound" ||
      Type === "checkout") &&
      setinCart(0)) ||
      (Type === "home" && setinCart(1)) ||
      (Type === "cart" && setinCart(2));
  }, [Type]);

  const renderPage = () => {
    if (Type === "home")
      return <Home setCartItem={setCartItem} products={products} />;
    if (Type === "cart")
      return (
        <Cart
          cartItems={cartItems}
          setCartItem={setCartItem}
          products={products}
        />
      );
    if (Type === "item")
      return <Iteminfo setCartItem={setCartItem} products={products} />;
    if (Type === "notfound") return <NotFound />;
    if (Type === "checkout")
      return <Checkout cartItems={cartItems} products={products} />;
    if (Type === "admin")
      return (
        <Adminpage
          products={products}
          setAdminType={setAdminType}
          onOpen={() => setShowPopUp(true)}
        />
      );
  };
  return (
    <>
      {showPopUp && (
        <PopUpProduct
          action={adminType}
          onClose={() => setShowPopUp(false)}
          setProduct={setProduct}
        />
      )}
      <div className="home">
        <Header inCart={inCart} setinCart={setinCart} cartItems={cartItems} />
        {renderPage()}
        <Footer />
      </div>
    </>
  );
}
