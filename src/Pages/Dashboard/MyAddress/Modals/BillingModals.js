import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { setUserBillingInfo } from '../../../../Redux/Actions/userActions';
import httpLink from '../../../../ServerLink/serverLink';

const BillingModals = ({ setIsOpen }) => {
    const dispatch= useDispatch()
    const user = useSelector(state => state.user);
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    
    const onSubmit = async info => {
        fetch(`${httpLink}/user/bill/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    dispatch(setUserBillingInfo(info))
                    swal("Successfull","Billing information updated successfully", "success");
                    reset()
                    setIsOpen(false)
                }
                else   {
                       swal("Failed","Failed update Billing Information","error"); reset() 
                   }

                
            })
            

    };

    return (
        <div >
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <label htmlFor="my-modal" className="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Edit Billing Address</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Lane</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Lane"
                                {...register("lane", {
                                    required: {
                                        value: true,
                                        message: 'lane is required'
                                    }
                                })}
                                className="input input-bordered" />

                            <label className="label">
                                {errors.lane && <span className="label-text-alt text-error">This field is required</span>}

                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Area</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Area"
                                {...register("area", {
                                    required: {
                                        value: true,
                                        message: 'area is required'
                                    }
                                })}
                                className="input input-bordered" />

                            <label className="label">
                                {errors.lane && <span className="label-text-alt text-error">This field is required</span>}

                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input
                                type="text"
                                placeholder="City"
                                {...register("city", {
                                    required: {
                                        value: true,
                                        message: 'city is required'
                                    }
                                })}
                                className="input input-bordered" />
                            <label className="label">
                                {errors.city && <span className="label-text-alt text-error">This field is required</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">State</span>
                            </label>
                            <input
                                type="text"
                                placeholder="State"
                                {...register("state", {
                                    required: {
                                        value: true,
                                        message: 'state is required'
                                    }
                                })}
                                className="input input-bordered" />
                            <label className="label">
                                {errors.city && <span className="label-text-alt text-error">This field is required</span>}
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Country"
                                {...register("country", {
                                    required: {
                                        value: true,
                                        message: 'Country is required'
                                    }
                                })}
                                className="input input-bordered" />
                            <label className="label">
                                {errors.city && <span className="label-text-alt text-error">This field is required</span>}
                            </label>
                        </div>


                        <div className="modal-action form-control mt-6">
                            <input type="submit" value="Update" htmlFor="my-modal" className="btn btn-primary text-white" />
                            {/* <label htmlFor="my-modal" className="btn btn-primary">Update</label> */}
                        </div>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default BillingModals;