
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import TrendingModal from "../components/TrendingModal"
import "./styles/SearchPage.scss"
import api from "../api/api"
import { Item } from "../defs/types.def"
export default function SearchPage() {
  const [trending, setTrending] = useState([])
  const[showModal,setModal]=useState(false)

    const fetchData = async () => {
        const response = await api.get("/products")
        const data = await response.data
        const filteredItems = data.filter((item: Item) => item.category.toLowerCase().includes("men's clothing") || item.category.toLowerCase().includes("women's clothing"));
        const result = filteredItems.slice(0, 5);
        console.log("result: ", result)
        setTrending(result)


    }

    useEffect(() => {
        fetchData()
    }, [])
  
  const handleOnClick = () => {
    if (!showModal) {
      
      setModal(prev => !prev)
    }
  }

  return (
    <div className="container">
      <div className="container-searchbar">
        <SearchBar onClick={handleOnClick } />

      </div>
      {showModal&&(<div className="container-trendingmodal">

        <TrendingModal trending={trending } />
      </div>)}
    </div>
  )
}