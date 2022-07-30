import React from 'react';
import Banner from './Banner';
import Contacts from './Contacts';
import Footer from '../../Components/Footer';
import MiniNav from './MiniNav';
import Reviews from './Reviews/Reviews';
import Summary from './Summary';
import Tools from './Tools.js/Tools';

const Home = () => {

    
    return (
        <div>
             <Banner/>
             <MiniNav/>
             <Tools/>
             <Summary/>
             <Reviews/>
             <Contacts/>
             <Footer/>
            
        </div>
    );
};

export default Home;

