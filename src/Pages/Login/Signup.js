import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Components/Loading'
import swal from 'sweetalert';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating] = useUpdateProfile(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    if(loading || updating){
        return <Loading/>
    }

    const onSubmit =async data =>{
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName : data.displayName });
    };


if(user ){
    return <Navigate to="/" replace={true} />
}

if (error) {
    swal("Failed to Sign up", `${error}`, "error");
}



    return (
        <div class="hero h-screen bg-[url(https://i.ibb.co/276tBPq/instruments-electrical-repair.jpg)]">
        <div class="hero-content flex-col ">
            <div class="text-center lg:text-center">
                <h1 class="text-5xl font-bold text-white">Sign Up</h1>
            </div>
            <div class="card  w-full  bg-base-100">
                <div class="card-body">

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("displayName", {required: true })}
                                class="input input-bordered" />

                            <label  className="label">
                            {errors.name && <span className="label-text-alt text-error">Name is required</span>}
                                
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                 })}
                                class="input input-bordered" />

                            <label  className="label">
                            {errors.email && <span className="label-text-alt text-error">This field is required</span>}
                                
                            </label>
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                 className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label  className="label">
                                {errors.password && <span  className="label-text-alt text-error">{errors.password.message}</span>}
                              
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p><small>Already have an account? <Link  className='text-secondary font-bold' to="/login">Log In</Link></small></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;