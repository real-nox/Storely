import { useEffect, useState } from "react";
import { products } from "../testItems";
import { Eye, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import type { SetCartItem } from "../Home";

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
  setCartItem,
}: {
  category_name: string;
  filter: string;
  setCartItem: SetCartItem;
}) {
  const [filteredItems, setFilteredItems] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredItems(
      products.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  }, [filter]);

  return (
    <>
      {filteredItems.map(
        ({ id, category, description, name, price, icon }: Items) => {
          return (
            (category_name === "All" ||
              (category_name !== "All" && category_name === category)) && (
              <div
                className="ItemCard border"
                key={id}
                onClick={() => navigate(`/${id}`)}
              >
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
                  <button
                    className="view border"
                    onClick={() => navigate(`/${id}`)}
                  >
                    <Eye /> View
                  </button>
                  <button
                    className="add border"
                    onClick={(ev) => {
                      ev.stopPropagation();
                      setCartItem((prev: { id_products: number[] }) => ({
                        ...prev,
                        id_products: [...prev.id_products, parseInt(id)],
                      }));
                    }}
                  >
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
