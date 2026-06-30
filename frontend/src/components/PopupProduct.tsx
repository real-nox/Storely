import type { SetProduct } from "../Home";
import AddP from "./actions/AddP";
import ModifyP from "./actions/ModifyP";
import RemoveP from "./actions/RemoveP";
import type { Items } from "./Item";

export type actions = {
  type: "add" | "modify" | "remove" | "",
  product: Items
};

export default function PopUpProduct({
  action,
  onClose,
  setProduct,
}: {
  action: actions;
  onClose: () => void;
  setProduct: SetProduct;
}) {
  const renderPage = () => {
    switch (action.type) {
      case "":
        return null;
      case "add":
        return <AddP onClick={onClose} setProduct={setProduct} />;
      case "modify":
        return <ModifyP />;
      case "remove":
        return (
          <RemoveP
            onClick={onClose}
            setProduct={setProduct}
            product={action.product}
          />
        );
    }
  };
  return (
    <div className="Pagecontainer" onClick={onClose}>
      {renderPage()}
    </div>
  );
}
