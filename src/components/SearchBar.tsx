

import { FiSearch } from "react-icons/fi";
import "./styles/SearchBar.scss"
import { SearchBarProps } from "../defs/types.def";

export default function SearchBar({onClick}:SearchBarProps) {
  return (
      <div className="search-container" onClick={onClick}>
          <div className="search-input-container">
              <input type="text" placeholder="Search"className="search-input"/>
          </div>
          <div className="search-icon-container">
              <FiSearch className="search-icon"/>
          </div>
    </div>
  )
}