import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router";

type SetinCart = (setinCart: number) => void;

export default function Header({
  setinCart,
  inCart,
}: {
  setinCart: SetinCart;
  inCart: number;
}) {
  const navigate = useNavigate();
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
  );
}
