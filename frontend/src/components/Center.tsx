import { useState } from "react";
import Category from "./Category";
import Offres from "./Offres";
import Bar from "./Bar";

export default function Center() {
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("");

  return (
    <div className="Center">
      <Offres />
      <Bar setCategory={setCategory} setFilter={setFilter} filter={filter} />
      <Category category_name={category} filter={filter} />
    </div>
  );
}
