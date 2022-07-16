import React from 'react';
import trade from "../../assets/trade.png";
import "./Newsletter.css";

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <div className="container">
                {/* Newsletter left  */}
                <div className="newsletter-left">
                    <div className="img-container">
                        <img src={trade} alt="Trade" />
                    </div>
                </div>
                {/* Newsletter right  */}
                <div className="newsletter-right">
                    <h2>Earn passive income with crypto.</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;