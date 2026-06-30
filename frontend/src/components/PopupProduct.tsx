import type { SetProduct } from "../Home";
import AddP from "./actions/AddP";
import ModifyP from "./actions/ModifyP";
import RemoveP from "./actions/RemoveP";

export type actions = "add" | "modify" | "remove" | "";

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
    switch (action) {
      case "":
        return null;
      case "add":
        return <AddP onClick={onClose} setProduct={setProduct}/>;
      case "modify":
        return <ModifyP />;
      case "remove":
        return <RemoveP />;
    }
  };
  return (
    <div className="Pagecontainer" onClick={onClose}>
      {renderPage()}
    </div>
  );
}
