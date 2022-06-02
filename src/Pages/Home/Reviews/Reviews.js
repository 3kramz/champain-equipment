import React from 'react';
import Review from './Review';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';

const Reviews = () => {
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className="bg-primary my-10 py-16 overflow-hidden">
            <h2 className="text-white text-center text-5xl pb-10" >Our Clients <span className="text-secondary">Review</span> </h2>
            <Slider {...settings}>
               
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
             
               
            </Slider>
        </div>
    );

};

export default Reviews;