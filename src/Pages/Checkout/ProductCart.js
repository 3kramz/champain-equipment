import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const ProductCart = ({ tool }) => {
    const { minOrder, img, price, name, ratings } = tool
    
    return (
        <div className=' flex justify-between items-center '>
            <img  className='h-[100px] ' src={img} alt="product" />
            <div>
                <p className='cursor-pointer font-semibold ease-in duration-300'>{name}</p>
                <StarRatings
                    starRatedColor="orange"
                    rating={ratings}
                    starDimension="16px"
                    starSpacing="5px"
                />
            </div>
            <p className='text-[#B6B6B6]'>x {minOrder}</p>
            <p className='font-bold'>${price}</p>
        </div>
    );
};

export default ProductCart;