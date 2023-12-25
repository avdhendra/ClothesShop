

import Trendings from "./Trendings"
import "./styles/TrendingModal.scss"

import {  TrendingProps } from "../defs/types.def"
export default function TrendingModal({trending}:TrendingProps) {
  
    return (
        <div className="trend-container">

            <div className="trend-container-one">
                <div className="trend-container-one-head">
                    <p>Latest Trend</p>
                </div>
                <div className="trend-container-one-component">
                    {trending?.map(({ image, title },index) => (
                        <Trendings key={index} img={image} name={title} />
                    ))}

                </div>
            </div>
            <div className="trend-container-two">
                <div className="trend-container-two-head">
                    <p>Popular Suggestions</p>
                </div>
                <div className="trend-container-two-component">

                    {trending?.map(({ title }) => (
                        <span>{title}</span>
                    ))}
                </div>

            </div>

        </div>
    )
}