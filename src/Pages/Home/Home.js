import React from 'react';
import Banner from './Banner';
import Contacts from './Contacts';
import Footer from './Footer';
import MiniNav from './MiniNav';
import Reviews from './Reviews/Reviews';
import Tools from './Tools.js/Tools';

const Home = () => {
    return (
        <div>
             <Banner/>
             <MiniNav/>
             <Tools/>
             <Reviews/>
             <Contacts/>
             <Footer/>
            
        </div>
    );
};

export default Home;

