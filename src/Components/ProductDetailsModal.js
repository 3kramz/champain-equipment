import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiArrowLeft } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings/build/star-ratings';
import swal from 'sweetalert';
import { setCart } from '../Redux/Actions/cartActions';
import httpLink from '../ServerLink/serverLink';

const ProductDetailsModal = ({ tool, setIsOpen }) => {
    const { _id, description, minOrder, img, name, price, ratings } = tool
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const addToCart = tool => {
        
        const filredTools = cart?.filter(tool => tool["_id"] === _id)
        if (filredTools.length===0) {
            cart.push(tool)
       
            fetch(`${httpLink}/cart/${user.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cart),
            })
            .then(res => res.json())
            .then(data => {
                
                        dispatch(setCart(cart))
                        
                    })
                .catch(err => console.log(err))
        }
        else {
            swal("Tools ", "Already Added to cart", "warning");
        }
        
        setIsOpen(false)

    }

    return (
        <>

            <input type="checkbox" id={_id} class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box w-11/12 max-w-7xl">
                    <div className="lg:flex my-5 ">
                        <div className="border  border-[#E5E5E5] rounded lg:w-1/2 my-5">
                            <img src={img} alt="" className="mx-auto object-cover "
                            />
                        </div>
                        <div className=" lg:w-1/2">
                            <div className=''>
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <StarRatings
                                    starRatedColor="orange"
                                    rating={ratings}
                                    starDimension="16px"
                                    starSpacing="5px"
                                />
                                <span className='mt-1 ml-2 text-sm'> ({ratings})</span>
                                <p className='text-xl font-bold'>${price} per/unit <span className='text-sm font-medium'> ( {minOrder} min order)</span></p>
                                <p className='text-xl '>{description}</p>
                            </div>
                            <div class="flex justify-between font-main text-base font-medium text-white mt-10">
                                <label for={_id} class=" flex justify-center gap-3 btn btn-wide btn-sm btn-outline hover:text-white  hover:bg-black"> <HiArrowLeft />Close</label>
                                <label onClick={() => { addToCart(tool) }} class=" flex justify-center gap-3 btn btn-wide btn-sm btn-primary hover:text-black hover:bg-accent"><AiOutlineShoppingCart /> Add to Cart</label>
                            </div>
                        </div>
                    </div>



                </div>
            </div>








        </ >
    );
};

export default ProductDetailsModal;