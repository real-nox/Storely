import { useNavigate, useParams } from "react-router";
import { products } from "../testItems";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Iteminfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) navigate("/404");

  const [qte, setQte] = useState(0);
  return (
    <div className="item Center">
      <div className="top">
        <button onClick={() => navigate("/")}>
          <ArrowLeft /> Back to Shop
        </button>
      </div>
      <div className="info">
        <div className="left">
          <div className="icon border">
            <img src={product?.icon} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="infop">
            <span className="categoryI border">{product?.category}</span>
            <h1 className="nameI">{product?.name}</h1>
            <span className="descI">{product?.description}</span>
            <span className="priceI">{product?.price} MAD</span>
            <span className="stockI">Stock: {product?.qte} available</span>
            <span className="qteI">Quantity</span>
            <div className="qte">
              <Minus
                onClick={() => {
                  qte > 0 && setQte(qte - 1);
                }}
                className="border"
              />
              <input
                type="number"
                max={product?.qte}
                min={0}
                onChange={(ev) => setQte(parseInt(ev.target.value))}
                value={qte}
                disabled
                className="border"
                name="qtei"
              />
              <Plus
                className="border"
                onClick={() => {
                  qte >= 0 && qte < (product?.qte || 20) && setQte(qte + 1);
                }}
              />
            </div>
          </div>
          <div className="actions">
            <button className="view border">
              <ShoppingCart /> Add to Cart
            </button>
            <button className="add border">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
