import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Components/Loading'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import { toast } from 'react-toastify';



const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    if (loading) return <Loading />
    if (error) swal("Failed to log in", `${error}`, "error");

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    if (user) return <Navigate to="/" replace={true} />

    return (
        <div className="hero h-screen bg-[url(https://i.ibb.co/3SmRc1y/banner.webp)]">
            {toast('Admin Credentials is given in README.md file in the root directory of github repository')}
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold text-white">Login now!</h1>
                </div>
                <div className="card  w-full  bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
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
                                    className="input input-bordered" />

                                <label className="label">
                                    {errors.email && <span className="label-text-alt text-error">This field is required</span>}

                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered "
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
                                <label className="label">
                                    {errors.password && <span className="label-text-alt text-error">{errors.password.message}</span>}

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary text-white" />

                            </div>
                        </form>
                       <small>Admin Credentials is given in README.md file in the root directory of github repository</small>
                        <p><small>New to Champion? <Link className='text-secondary font-bold' to="/signup"> Create Account </Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;