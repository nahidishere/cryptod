import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import Coin from './Coin/Coin';
import "./Featured.css";

const Featured = () => {
    const [coins, setCoins] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';
    useEffect(() => {
        axios.get(url).then(response => setCoins(response.data));
    }, [])
    if (!coins) {
        return <Loading />
    }
    return (
        <section className="featured">
            <div className="container">
                {/* Left  */}
                <div className="left">
                    <h2>Explore top Crypto's like Bitcoin, Etherium, Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencys and NFT's</p>
                    <button className="btn">See More Coins</button>
                </div>
                {/* Right  */}
                <div className="right">
                    {
                        coins?.map(coin => <Coin key={coin.id} coin={coin} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Featured;