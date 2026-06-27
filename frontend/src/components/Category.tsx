import type { SetCartItem } from "../Home";
import Item from "./Item";

export default function Category({
  category_name,
  filter,
  setCartItem
}: {
  category_name: string;
  filter: string;
  setCartItem: SetCartItem
}) {
  return (
    <div className={`CategoryContainer ${category_name}`}>
      <Item category_name={category_name} filter={filter} setCartItem={setCartItem} />
    </div>
  );
}
