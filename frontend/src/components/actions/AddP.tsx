import { useState } from "react";
import { addProducts, getProductByName } from "../../api/products.api";
import type { SetProduct } from "../../Home";

interface Items {
  category: string;
  name: string;
  icon: string;
  description: string;
  qte: number;
  price: number;
}

export default function AddP({
  onClick,
  setProduct,
}: {
  onClick: () => void;
  setProduct: SetProduct;
}) {
  const [error, setError] = useState("");
  const [productInfo, setProductInfo] = useState<Items>({
    category: "All",
    name: "",
    icon: "",
    description: "",
    qte: 0,
    price: 0,
  });

  const typing = <K extends keyof Items>(key: K, value: Items[K]) => {
    setProductInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const submitAddP = async () => {
    if (
      !productInfo?.name ||
      !productInfo?.category ||
      !productInfo?.description ||
      productInfo?.price == null ||
      productInfo?.qte == null
    )
      return null;

    const isAlreadyAdded = await getProductByName(productInfo.name);

    if (isAlreadyAdded) return setError(isAlreadyAdded);

    const isAdded = await addProducts(productInfo);
    if (isAdded) {
      setError("");
      onClick();
      setProduct((prev) => [
        ...prev,
        {
          id: isAdded.id,
          category: productInfo.category,
          description: productInfo.description,
          icon: productInfo.icon,
          name: productInfo.name,
          price: productInfo.price,
          qte: productInfo.qte,
          isPromo: false
        },
      ]);
    } else alert(isAdded);
  };

  return (
    <div onClick={(ev) => ev.stopPropagation()} className="addC Card border">
      <p className="title">Add New Product</p>
      {error && (
        <p style={{ width: "100%", textAlign: "center", color: "red" }}>
          {error}
        </p>
      )}
      <div className="info">
        <div className="form">
          <div className="infoItem">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border"
              onChange={(ev) => typing("name", ev.target.value)}
            />
          </div>
          <div className="infoItem first">
            <div>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                className="border"
                onChange={(ev) => typing("category", ev.target.value)}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                name="stock"
                id="stock"
                className="border"
                onChange={(ev) => typing("qte", parseFloat(ev.target.value))}
              />
            </div>
          </div>
          <div className="infoItem">
            <label htmlFor="price">Price MAD</label>
            <input
              type="number"
              name="price"
              id="price"
              className="border"
              onChange={(ev) => typing("price", parseFloat(ev.target.value))}
            />
          </div>
          <div className="infoItem">
            <label htmlFor="imgURL">Image URL</label>
            <input
              type="text"
              name="imgURL"
              id="imgURL"
              className="border"
              onChange={(ev) => typing("icon", ev.target.value)}
            />
          </div>
          <div className="infoItem">
            <label htmlFor="description">Description</label>
            <textarea
              name="imgURL"
              id="imgURL"
              className="border"
              onChange={(ev) => typing("description", ev.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="view border" onClick={onClick}>
          Cancel
        </button>
        <button className="add border" onClick={submitAddP}>
          Confirm
        </button>
      </div>
    </div>
  );
}
