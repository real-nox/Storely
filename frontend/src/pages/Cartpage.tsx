import { Minus, Plus, ShoppingBag } from "lucide-react";
import type { CartItem, SetCartItem } from "../Home";
import { useNavigate } from "react-router";
import { products } from "../testItems";
import type { Items } from "../components/Item";

export default function Cart({
  cartItems,
  setCartItem,
}: {
  cartItems: CartItem;
  setCartItem: SetCartItem;
}) {
  const navigate = useNavigate();

  if (!cartItems) return null;

  const cartProducts = cartItems.id_products
    .map((item) => {
      const product = products.find((p) => parseInt(p.id) === item.id);
      return product ? { ...product, qte: item.qte, max: product.qte } : null;
    })
    .filter(Boolean) as (Items & { qte: number; max: number })[];

  return (
    <div
      className={`cartP Center ${cartItems.id_products.length === 0 ? "Empty" : ""}`}
    >
      {cartItems.id_products.length === 0 ? (
        <>
          <ShoppingBag />
          <h3>Your cart is empty</h3>
          <p>Add some products to your cart to get started!</p>
          <button className="add border" onClick={() => navigate("/")}>
            Start shopping
          </button>
        </>
      ) : (
        <>
          <h1>Shopping Cart</h1>
          <div className="list">
            <div className="leftList">
              {cartProducts.map(
                ({ id, description, icon, name, price, qte, max }) => {
                  const numericId = parseInt(id);

                  const handleQte = (quantity: number): void => {
                    const next = qte + quantity;

                    if (next < 1 || next > max) return;
                    setCartItem((prev) => ({
                      ...prev,
                      id_products: prev.id_products.map((item) =>
                        item.id === numericId ? { ...item, qte: next } : item,
                      ),
                    }));
                  };

                  return (
                    <div className="ItemCard border" key={numericId}>
                      <div className="icon border">
                        <img src={icon} alt="" />
                      </div>
                      <div className="infop">
                        <div>
                          <span className="nameI">{name}</span>
                          <span className="descI">{description}</span>
                          <div className="qte">
                            <Minus
                              onClick={() => handleQte(-1)}
                              className="border"
                            />
                            <input
                              type="number"
                              max={max}
                              min={1}
                              value={qte}
                              readOnly
                              className="border"
                              name="qtei"
                            />
                            <Plus
                              className="border"
                              onClick={() => handleQte(1)}
                            />
                          </div>
                        </div>
                        <div className="right">
                          <span className="priceI">{price * qte} MAD</span>
                          <span className="descI">{price} MAD Per item</span>
                        </div>
                      </div>
                      <div className="actions"></div>
                    </div>
                  );
                },
              )}
            </div>
            <div className="rightList"></div>
          </div>
        </>
      )}
    </div>
  );
}
