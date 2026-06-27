import { useEffect, useState } from "react";
import { products } from "../testItems";
import { Eye, ShoppingCart } from "lucide-react";

export type Category =
  | "All"
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

export default function Item({
  category_name,
  filter,
}: {
  category_name: string;
  filter: string;
}) {
  const [filteredItems, setFilteredItems] = useState(products);

  useEffect(() => {
    console.log(filter)
    setFilteredItems(products.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())));
  }, [filter]);

  console.log(filteredItems);
  return (
    <>
      {filteredItems.map(
        ({ id, category, description, name, price, icon }: Items) => {
          return (
            (category_name === "All" ||
              (category_name !== "All" && category_name === category)) && (
              <div className="ItemCard border" key={id}>
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
                  <button className="view border">
                    <Eye /> View
                  </button>
                  <button className="add border">
                    <ShoppingCart /> Add
                  </button>
                </div>
              </div>
            )
          );
        },
      )}
    </>
  );
}
