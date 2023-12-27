
import { useState } from "react"
import "./styles/Product.scss"
import { Rating } from "react-simple-star-rating"
import {  ItemProps } from "../defs/types.def"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function Product({ productItem}:ItemProps) {

  const [rating, setRating] = useState(productItem.rating.rate)
 const [icon,setIcon]=useState(false)
  const handleRating = (rate: number) => {
    setRating(rate)
  }
  const handleChangeIcon = () => {
  setIcon(prev=>!prev)
  }
  return (
    <div className="productcontainer" >
      <div className="productcontainer-image-container">
        <img src={productItem?.image} alt={productItem.title} className="card-image" />
        {icon ? <FaHeart className="heart-icon" onClick={handleChangeIcon } />:<FaRegHeart className="heart-icon" onClick={handleChangeIcon} /> }
         <div className="productcontainer-card-preview">
          <span>Preview</span>
        </div>
      </div>
      <div className="card-content">
        <span className="card-title">{productItem.title}</span>
        <div className="card-prices">
          <span className="old-price">Rs.{productItem.price-6}</span>
          <span className="new-price">Rs.{productItem.price}</span>
        </div>
        <div className="card-rating">
          <Rating  onClick={handleRating} initialValue={rating}size={20} />
        </div>
      </div>
   
       
      
    </div>
  )
}