import React from 'react';
import { BsFillArrowDownLeftCircleFill, BsFillArrowUpRightCircleFill } from "react-icons/bs";
import "./Coin.css";

const Coin = ({ coin }) => {
    const { name, image, current_price, price_change_percentage_24h } = coin
    return (
        <div className="card">
            <div className="top">
                <img src={image} alt={name} />
            </div>
            <div>
                <h5>{name}</h5>
                <p>${current_price.toLocaleString()}</p>
            </div>
            {
                price_change_percentage_24h < 0 ? <span className='red'><BsFillArrowDownLeftCircleFill /> {price_change_percentage_24h}%</span>
                    :
                    <span className='green'><BsFillArrowUpRightCircleFill /> {price_change_percentage_24h}%</span>
            }
        </div>
    );
};

export default Coin;