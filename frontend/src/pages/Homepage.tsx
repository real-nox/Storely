import { useState } from "react";
import Offres from "../components/Offres";
import Bar from "../components/Bar";
import Category from "../components/Category";
import type { SetCartItem } from "../Home";
import type { Items } from "../components/Item";

export default function Home({setCartItem, products} : {setCartItem: SetCartItem, products: Items[]}) {
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("");

  return (
    <div className="home Center">
      <Offres />
      <Bar setCategory={setCategory} setFilter={setFilter} filter={filter} />
      <Category category_name={category} filter={filter} setCartItem={setCartItem} products={products}/>
    </div>
  );
}
