import { useNavigate } from "react-router";
import type { Items } from "../components/Item";
import type { CartItem } from "../Home";
import { useEffect, useState } from "react";

interface InfoUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  code: string;
}

export default function Checkout({ cartItems, products }: { cartItems: CartItem, products: Items[] }) {
  const [info, setInfo] = useState<InfoUser>({
    city: "",
    code: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    state: "",
    street: "",
  });

  const navigate = useNavigate();
  if (!cartItems) return null;

  useEffect(() => {
    if (cartItems?.id_products.length === 0) navigate("/");
  }, []);

  let sum: number = 0;
  let shipping = 10.0;

  const cartProducts = cartItems.id_products
    .map((item) => {
      const product = products.find((p) => parseInt(p.id) === item.id);
      return product ? { ...product, qte: item.qte, max: product.qte } : null;
    })
    .filter(Boolean) as (Items & { qte: number; max: number })[];

  const isFilled =
    !!info.city &&
    !!info.code &&
    !!info.email &&
    !!info.firstName &&
    !!info.lastName &&
    !!info.phone &&
    !!info.state &&
    !!info.street;

  const fill = (part: keyof InfoUser, info: string) => {
    setInfo((prev) => ({
      ...prev,
      [part]: info,
    }));
  };

  const submitCheckout = () => {
    console.log(info)
  }
  return (
    <div
      className={`cartP Center ${cartItems.id_products.length === 0 ? "Empty" : ""}`}
    >
      <>
        <h1>Checkout</h1>
        <div className="list">
          <div className="leftList shipping">
            <div className="ContactInfo info border">
              <p className="title">Contact information</p>
              <div className="form">
                <div className="infoItem first">
                  <div>
                    <label htmlFor="firstN">First Name</label>
                    <input
                      className="border"
                      type="text"
                      name="firstN"
                      id="firstN"
                      onChange={(ev) =>
                        fill('firstName', ev.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="lastN">Last Name</label>
                    <input
                      className="border"
                      type="text"
                      name="lastN"
                      id="lastN"
                      onChange={(ev) =>
                        fill('lastName', ev.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="infoItem">
                  <label htmlFor="Email">Email</label>
                  <input
                    className="border"
                    type="email"
                    name="Email"
                    id="Email"
                    onChange={(ev) =>
                        fill('email', ev.target.value)
                      }
                  />
                </div>
                <div className="infoItem">
                  <label htmlFor="Phone">Phone</label>
                  <input
                    className="border"
                    type="text"
                    name="Phone"
                    id="Phone"
                    onChange={(ev) =>
                        fill('phone', ev.target.value)
                      }
                  />
                </div>
              </div>
            </div>
            <div className="Shipping info border">
              <p className="title">Shipping Adress</p>
              <div className="form">
                <div className="infoItem">
                  <label htmlFor="streetA">Street Address</label>
                  <input
                    className="border"
                    type="text"
                    name="streetA"
                    id="streetA"
                    onChange={(ev) =>
                        fill('street', ev.target.value)
                      }
                  />
                </div>
                <div className="infoItem first shipping">
                  <div>
                    <label htmlFor="City">City</label>
                    <input
                      className="border"
                      type="text"
                      name="City"
                      id="City"
                      onChange={(ev) =>
                        fill('city', ev.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="State">State</label>
                    <input
                      className="border"
                      type="text"
                      name="State"
                      id="State"
                      onChange={(ev) =>
                        fill('state', ev.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="code">ZIP Code</label>
                    <input
                      className="border"
                      type="text"
                      name="code"
                      id="code"
                      onChange={(ev) =>
                        fill('code', ev.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rightList">
            <div className="summary border">
              <div className="top">
                <h3>Order Summary</h3>
                {cartProducts.map(({ id, name, price, qte }) => {
                  sum += qte * price;

                  return (
                    <p style={{ marginTop: "1rem" }} key={id}>
                      <span>
                        {name} x{qte}
                      </span>
                      <span>{(price * qte).toFixed(2)} MAD</span>
                    </p>
                  );
                })}
              </div>
              <div className="top center">
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
                <button disabled={!isFilled} onClick={submitCheckout} className="add border">
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
