import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import type { CartItem, SetCartItem } from "../Home";
import { useNavigate } from "react-router";
import type { Items } from "../components/Item";

export default function Cart({
  cartItems,
  setCartItem,
  products
}: {
  cartItems: CartItem;
  setCartItem: SetCartItem;
  products: Items[]
}) {
  const navigate = useNavigate();

  if (!cartItems) return null;

  let sum: number = 0;
  let shipping = 10.0;

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

                  sum += qte * price;

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
                          <div className="top">
                            <Trash2
                              style={{ color: "red", width: "80%" }}
                              onClick={() => {
                                setCartItem((prev) => ({
                                  ...prev,
                                  id_products: prev.id_products.filter(
                                    (i) => i.id !== parseInt(id),
                                  ),
                                }));
                              }}
                            />
                          </div>
                          <div className="bottom">
                            <span className="priceI">
                              {(price * qte).toFixed(2)} MAD
                            </span>
                            <span className="descI">{price} MAD Per item</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
            <div className="rightList">
              <div className="summary border">
                <div className="top">
                  <h3>Order Summary</h3>
                  <p>
                    <span>TTC</span>
                    <span>{sum.toFixed(2)}DH</span>
                  </p>
                  <p className="shipping">
                    <span>Shipping </span>
                    <span>{shipping}DH</span>
                  </p>
                </div>
                <div className="bottom">
                  <p className="total priceI">
                    Total :{" "}
                    <span className="priceI">
                      {(sum + shipping).toFixed(2)}DH
                    </span>
                  </p>
                  <button onClick={() => navigate("/checkout")}
                    className="add border"
                  >
                    Proceed to Checkout
                  </button>
                  <button onClick={() => navigate("/")} className="view border">Continue Shopping</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
