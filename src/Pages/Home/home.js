import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Featured from './Featured/Featured';
import Hero from './Hero/Hero';
import Newsletter from './Newsletter/Newsletter';

const home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Featured />
            <Newsletter />
            <Footer />
        </>
    );
};

export default home;