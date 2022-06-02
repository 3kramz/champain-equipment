import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';


const Tool = ({ tool }) => {
    const { img, name, price, ratings } = tool
  
    return (
        <div class="card w-96 ">
            <figure>
                <img className='h-[250px] ' src={img} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
               
                <p><span className="font-bold">Price:</span> {price} per/unit</p>
               
                <div className="flex items-center">
                <StarRatings
                    starRatedColor="orange"
                    rating={ratings}
                    starDimension="20px"
                    starSpacing="5px"
                />
                <p className='mt-1 ml-2 text-sm'> ({ratings})</p>
                </div>
                
                <div class="card-actions justify-start">
                <button class="btn btn-wide btn-sm btn-outline btn-primary">Wide</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;