import type { SetCartItem } from "../Home";
import Item, { type Items } from "./Item";

export default function Category({
  category_name,
  filter,
  setCartItem,
  products
}: {
  category_name: string;
  filter: string;
  setCartItem: SetCartItem,
  products: Items[]
}) {
  return (
    <div className={`CategoryContainer ${category_name}`}>
      <Item category_name={category_name} filter={filter} setCartItem={setCartItem} products={products} />
    </div>
  );
}
