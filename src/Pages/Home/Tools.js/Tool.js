import React, { useState } from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';
import ProductDetailsModal from '../../../Components/ProductDetailsModal';


const Tool = ({ tool }) => {
    const { _id, img, name, price, ratings, } = tool
    const [isOpen, setIsOpen] = useState(false);

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
                    <label onClick={()=>setIsOpen(true)} for={_id} class=" modal-button btn btn-wide btn-sm btn-outline btn-primary">Details</label>
                </div>
            </div>
            {isOpen && <ProductDetailsModal tool={tool} setIsOpen={setIsOpen}/>}
        </div>
    );
};

export default Tool;