import { useEffect } from "react";
import { products } from "../testItems";
import { Eye, ShoppingCart } from "lucide-react";

type Category =
  | "Fruits"
  | "Vegetables"
  | "Dairy"
  | "Bakery"
  | "Seafood"
  | "Meat";

export interface Items {
  id: string;
  category: Category;
  name: string;
  icon: string;
  description: string;
  qte: number;
  price: number;
  isPromo: boolean;
}

export default function Item({ category_name }: { category_name: string }) {
  useEffect(() => {
    console.log(category_name)
  }, [category_name])

  return (
    <>
      {products.map(({ id, category, description, name, price, icon }: Items) => {
        console.log(category)
        return (category_name === "all" || category_name !== "all" && category_name === category) && (
          <button className="ItemCard border" key={id}>
          <div className="icon border">
            <img src={icon} alt="" />
          </div>
          <div className="infop">
            <span className="categoryI border">{category}</span>
            <span className="nameI">{name}</span>
            <span className="descI">{description}</span>
            <span className="priceI">{price} MAD</span>
          </div>
          <div className="actions">
            <button className="view border"><Eye /> View</button>
            <button className="add border"><ShoppingCart /> Add</button>
          </div>
        </button>
        )
      })}
    </>
  );
}
