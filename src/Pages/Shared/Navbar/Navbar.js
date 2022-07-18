import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    return (
        <div className="header">
            <div className="container">
                <Link id='brand' to="/">Cryp<span className='primary'>Tod</span></Link>
                <ul className={click ? `nav-menu active` : 'nav-menu'}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all-cryptocurrency">All Cryptocurrency</Link></li>
                    <li><Link to="/">Earn</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
                <div className="btn-group">
                    <button className="btn">Connect Wallet</button>
                </div>
                <div onClick={handleClick} className="hamburger">
                    {
                        click ? (<FaTimes size={20} style={{ color: "#333" }} />) : (<FaBars size={20} style={{ color: "#333" }} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;