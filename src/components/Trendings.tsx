
import { TrendProps } from '../defs/types.def'
import "./styles/Trendings.scss"


export default function Trendings({img,name}:TrendProps) {
  return (
      <div className='trending-container'>
          <div className='trending-container-image'>
              <img src={img} alt="trend" />
          </div>
          <div className='trending-container-name'>
              <span >{name.slice(0,24)+'...'}</span>
          </div>
    </div>
  )
}