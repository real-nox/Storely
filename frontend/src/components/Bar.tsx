import { Search } from "lucide-react";
import { useState } from "react";
import Select from "react-select";

interface Options {
  value :string,
  label: string
}

const options : Options[] = [
  { value: "fruits", label: "Fruits" },
  { value: "vege", label: "Vegetable"}
]

export default function Bar({ setCategory }) {
  const [selected, setSelected] = useState<string>("");
  return (
    <div className="Bar">
      <div className="SearchBar">
        <label htmlFor="search">
          <Search />
          <input type="search" id="search" placeholder="Search for product..." />
        </label>
      </div>
      <div className="CategoryBar">
        <Select
        options={options}
        onChange={(ev) => {setSelected(ev?.value ?? options[0].value); console.log(selected)}} />
      </div>
    </div>
  );
}
