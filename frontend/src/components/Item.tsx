import { useEffect, useState } from "react";
import { Eye, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import type { CartItem, SetCartItem } from "../Home";

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
  category: string;
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
  products,
}: {
  category_name: string;
  filter: string;
  setCartItem: SetCartItem;
  products: Items[];
}) {
  const [filteredItems, setFilteredItems] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    if (!products) return;
    setFilteredItems(
      products.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  }, [filter, products]);

  return (
    <>
      {products &&
        filteredItems.map(
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
                    {icon === "" ? (
                      <img alt="There was an icon here" />
                    ) : (
                      <img src={icon} alt="" />
                    )}
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
                        setCartItem((prev: CartItem) => {
                          const numericId = parseInt(id);
                          const current = prev.id_products.find(
                            (item) => item.id === numericId,
                          );

                          if (current)
                            return {
                              ...prev,
                              id_products: prev.id_products.map((item) =>
                                item.id === numericId
                                  ? { ...item, qte: item.qte + 1 }
                                  : item,
                              ),
                            };
                          return {
                            ...prev,
                            id_products: [
                              ...prev.id_products,
                              { id: numericId, qte: 1 },
                            ],
                          };
                        });
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
