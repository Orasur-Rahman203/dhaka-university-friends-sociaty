import React from 'react';
import Slick from '../Component/HomeComponent/Slick';
import HeroSection from '../Component/HomeComponent/HeroSection'
import Footer from '../Footer';
import Header from '../Component/Header';


const HomePage = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Slick></Slick>
            <HeroSection/>
            {/* <Footer/> */}
        </div>
    );
};

export default HomePage;