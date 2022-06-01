import React from 'react';
import Banner from './Banner';
import Contacts from './Contacts';
import Footer from './Footer';
import MiniNav from './MiniNav';

const Home = () => {
    return (
        <div>
             <Banner/>
             <MiniNav/>
             <Contacts/>
             <Footer/>
            
        </div>
    );
};

export default Home;