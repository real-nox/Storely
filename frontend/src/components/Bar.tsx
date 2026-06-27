import { Search } from "lucide-react";
import Select from "react-select";
import type { Category } from "./Item";

interface Opts {
  value: Category;
  label: string;
}

const choices: Opts[] = [
  { value: "All", label: "All Categories" },
  { value: "Bakery", label: "Fruits" },
  { value: "Vegetables", label: "Vegetables" },
  { value: "Fruits", label: "Fruits" },
  { value: "Dairy", label: "Dairy" },
  { value: "Meat", label: "Meat" },
  { value: "Seafood", label: "Seafood" },
];

type SetCategory = (category: string) => void;

type SetFilter = (filter: string) => void;

export default function Bar({
  setCategory,
  setFilter,
  filter,
}: {
  setCategory: SetCategory;
  setFilter: SetFilter;
  filter: string;
}) {
  return (
    <div className="Bar">
      <div className="SearchBar">
        <label htmlFor="search" className="border">
          <Search />
          <input
            value={filter}
            type="search"
            id="search"
            placeholder="Search for product..."
            onChange={(ev) => setFilter(ev.target.value)}
          />
        </label>
      </div>
      <div className="CategoryBar">
        <Select
          defaultValue={choices[0]}
          options={choices}
          onChange={(ev) => {
            setCategory(ev?.value ?? "All");
          }}
        />
      </div>
    </div>
  );
}
