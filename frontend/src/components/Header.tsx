import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="Header">
      <div className="Top">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </div>
      <div className="Elements">
        <div className="Left">
          <Link to={"/"}>Storely</Link>
        </div>
        <nav className="Center">
          <Link to={""}>Home</Link>
          <Link to={""}>Contact</Link>
          <Link to={""}>About</Link>
          <Link to={""}>Sign Up</Link>
        </nav>
        <div className="Right">
          <div className="SearchBar">
            <label htmlFor="search">
              <input type="search" id="search" />
              <Search />
            </label>
          </div>
          <div className="Others">
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
