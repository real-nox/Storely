import { deleteProduct } from "../../api/products.api";
import type { SetProduct } from "../../Home";
import type { Items } from "../Item";

export default function RemoveP({
  product,
  onClick,
  setProduct,
}: {
  onClick: () => void;
  setProduct: SetProduct;
  product: Items;
}) {
  return (
    <div
      onClick={(ev) => ev.stopPropagation()}
      className="removeC Card border"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <p>
        Are you sure to Delete <strong>{product.name}?</strong>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          gap: "10px",
        }}
      >
        <button className="view cancelD border" onClick={onClick}>
          Cancel
        </button>
        <button
          className="add confirmD border"
          onClick={() => {
            onClick();
            deleteProduct(parseInt(product.id));
            setProduct((prev) => prev.filter((item) => item.id !== product.id));
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
