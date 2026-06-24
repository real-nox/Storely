import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <label htmlFor="search">
        <input type="search" id="search" />
        <Search />
      </label>
    </div>
  );
}
