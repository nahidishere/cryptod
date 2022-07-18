import React, { useState } from 'react';
import "./Currencies.css";
import Currency from '../Currency/Currency';
import { Button } from "react-bootstrap";

const Currencies = ({ currency }) => {
    const [modalShow, setModalShow] = useState(false);
    const [coin, setCoin] = useState(null);
    const { name, image, symbol, current_price, market_cap, market_cap_change_percentage_24h } = currency;
    // const handleCoin = () => {
    //     setCoin("currency")
    // }
    return (
        <tr className='py-2'>
            <td>
                <img className='logo' src={image} alt={name} />
                <span className="name">{name}</span>
            </td>
            <td>{symbol}</td>
            <td>${current_price}</td>
            <td>{market_cap_change_percentage_24h < 0 ? <span className='text-danger'>{market_cap_change_percentage_24h}</span> : <span>{market_cap_change_percentage_24h}</span>}%</td>
            <td>{market_cap}</td>
            <td><Button onClick={() => {
                setModalShow(true)
                setCoin(currency)
            }
            } variant="info" size="sm">More Info</Button></td>
            <Currency coin={coin} show={modalShow}
                onHide={() => setModalShow(false)} />
        </tr>
    );
};

export default Currencies;