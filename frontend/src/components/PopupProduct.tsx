import AddP from "./actions/AddP";
import ModifyP from "./actions/ModifyP";
import RemoveP from "./actions/RemoveP";

export type actions = "add" | "modify" | "remove" | "";

export default function PopUpProduct({
  action,
  onClose,
}: {
  action: actions;
  onClose: () => void;
}) {
  const renderPage = () => {
    switch (action) {
      case "":
        return null;
      case "add":
        return <AddP />;
      case "modify":
        return <ModifyP />;
      case "remove":
        return <RemoveP />;
    }
  };
  return <div className="Pagecontainer" onClick={onClose}>{renderPage()}</div>;
}
