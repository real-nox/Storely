import { Search } from "lucide-react";
import Select from "react-select";

interface Opts {
  value: string;
  label: string;
}

const choices: Opts[] = [
  { value: "all", label: "All Categories" },
  { value: "fruits", label: "Fruits" },
  { value: "vege", label: "Vegetable" },
];

interface SetCategory {
  setCategory: (category: string) => void;
}

export default function Bar({ setCategory }: SetCategory) {
  return (
    <div className="Bar">
      <div className="SearchBar">
        <label htmlFor="search">
          <Search />
          <input
            type="search"
            id="search"
            placeholder="Search for product..."
          />
        </label>
      </div>
      <div className="CategoryBar">
        <Select
          defaultValue={choices[0]}
          options={choices}
          onChange={(ev) => {
            setCategory(ev?.value ?? "all");
          }}
        />
      </div>
    </div>
  );
}
