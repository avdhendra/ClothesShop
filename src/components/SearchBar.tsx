

import { FiSearch } from "react-icons/fi";
import "./styles/SearchBar.scss"
import { SearchBarProps } from "../defs/types.def";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ search, onClick, type }: SearchBarProps) {
  const navigate = useNavigate()
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Call the onEnterPress function with the input value
     
      if (search?.current?.value) {
        navigate(`/product/${search?.current?.value}`)
      }
    }
  };
  const handleOnClick = () => {
    if (search?.current?.value) {
      navigate(`/product/${search?.current?.value}`)
    }
  }
  return (
    <div className={`search-container ${type === "product" ? "search-outline" : ""}`} onClick={onClick}>
      <div className="search-input-container">
        <input ref={search} type="text" placeholder="Search" className="search-input" onKeyDown={handleKeyDown} />
      </div>
      <div className="search-icon-container" onClick={handleOnClick}>
        <FiSearch className="search-icon" />
      </div>
    </div>
  )
}