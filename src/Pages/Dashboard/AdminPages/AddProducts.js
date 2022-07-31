import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = async data => {
        console.log(data)
        swal("Alert!!", "Functionality will added soon..", '');

    }


    return (
        <div className="w-11/12">
            <h2 className="text-2xl text-center">Add a New Part</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-11/12 ">
                <div className='lg:flex gap-5 my-5'>

                    <div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Part Name</span>
                            </label>
                            <input type="text" placeholder="Part Name" className="input input-bordered w-full max-w-md"   {...register("name")} required />

                        </div>



                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Part Description</span>
                            </label>
                            <input type="text" placeholder="Part description" className="input input-bordered w-full max-w-md"  {...register("description")} required />

                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Part price</span>
                            </label>
                            <input type="number" placeholder="Part price" className="input input-bordered w-full max-w-md"  {...register("price")} required />
                        </div>
                    </div>

                    <div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Part stock</span>
                            </label>
                            <input type="number" placeholder="Part stock" className="input input-bordered w-full max-w-md"  {...register("stock")} required />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Part Minimum Order</span>
                            </label>
                            <input type="number" placeholder="Part Minimum Order" className="input input-bordered w-full max-w-md" {...register("minOrder")} required />

                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" className="input input-bordered w-full " {...register("image")} required />
                        </div>
                    </div>
                </div>

                <input className='btn btn-wide btn-primary text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProducts;