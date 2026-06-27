import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router";
import type { CartItem } from "../Home";
import { useEffect, useState } from "react";

type SetinCart = (setinCart: number) => void;

export default function Header({
  setinCart,
  inCart,
  cartItems,
}: {
  setinCart: SetinCart;
  inCart: number;
  cartItems: CartItem;
}) {
  const [numberItems, setNumberItems] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cartItems?.id_products?.reduce((sum, item) => sum + item.qte, 0)
    setNumberItems(total)
  }, [cartItems]);
  return (
    <div className="Header">
      <div className="Elements">
        <div className="Left">
          <Link to={"/"}>Storely</Link>
        </div>
        <div className="Right">
          <Link
            onClick={() => {
              setinCart(1);
              navigate("/");
            }}
            className={`shopbtn ${inCart === 1 ? "enabled" : ""}`}
            to={"/"}
          >
            Shop
          </Link>
          <div className="cart">
            {cartItems?.id_products?.length > 0 && <p>{numberItems}</p>}
            <ShoppingCart
              onClick={() => {
                setinCart(2);
                navigate("/cart");
              }}
              className={`shoppingcartbtn ${inCart === 2 ? "enabled" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
