import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [inCart, setinCart] = useState(0);

  return (
    <div className="Header">
      <div className="Elements">
        <div className="Left">
          <Link to={"/"}>Storely</Link>
        </div>
        <div className="Right">
          <Link
            onClick={() => setinCart(0)}
            className={`shopbtn ${inCart === 0 ? "enabled" : ""}`}
            to={"/"}
          >
            Shop
          </Link>
          <ShoppingCart
            onClick={() => setinCart(1)}
            className={`shoppingcartbtn ${inCart === 1 ? "enabled" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
