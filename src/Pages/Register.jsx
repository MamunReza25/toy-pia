import React, { use, useState } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
    const [show, setShow] = useState(false);
    const { createUser, updateUserProfile, emailvarified, Logout } = use(AuthContext)
    console.log(createUser)
    const navigate = useNavigate();
    const handleRegister = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        //   Password validation before Firebase call
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must contain at least one lowercase letter.");
        }
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long.");
        }
        console.log("Register clicl here...", name, photo, email, password)
        createUser(email, password)
            .then(result => {
                // updateprofile
                updateUserProfile(name, photo)
                    .then(() => {
                        Logout()
                            .then(() => {
                                navigate('/loginpage');
                            })
                            // email verifed
                            // emailvarified()
                            //     .then(result => {
                            //         toast("Send a email vafiy...");
                            //         // logout
                            //         Logout()
                            //             .then(() => {
                            //                 navigate('/loginpage');
                            //             })
                            .catch(error => {
                                toast.error(error.message)
                                console.log(error.message)
                            });
                    }).catch(error => {
                        toast.error(error.message)
                        console.log(error.message)
                    });

            }).catch((e) => {
                console.log(e);
                console.log(e.code);
                if (e.code === "auth/email-already-in-use") {
                    toast.error(
                        "User already exists"
                    );
                } else if (e.code === "auth/weak-password") {
                    toast.error(" at least 6 digit password ");
                } else if (e.code === "auth/invalid-email") {
                    toast.error("Invalid email format. Please check your email.");
                } else if (e.code === "auth/user-not-found") {
                    toast.error("User not found. Please sign up first.");
                } else if (e.code === "auth/wrong-password") {
                    toast.error("Wrong password. Please try again.");
                } else if (e.code === "auth/user-disabled") {
                    toast.error("This user account has been disabled.");
                } else if (e.code === "auth/too-many-requests") {
                    toast.error("Too many attempts. Please try again later.");
                } else if (e.code === "auth/operation-not-allowed") {
                    toast.error("Operation not allowed. Please contact support.");
                } else if (e.code === "auth/network-request-failed") {
                    toast.error("Network error. Please check your connection.");
                } else {
                    toast.error(e.message || "An unexpected error occurred.");
                }
            });

    }




    return (
        <section className='flex justify-center items-center py-10'>
            <title>create account</title>
            <form action="" onSubmit={handleRegister}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <h1 className='text-2xl font-extrabold text-secondary py-5'>Registation now!</h1>

                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Name" required />

                    <label className="label">Photo</label>
                    <input type="url" className="input" name='photo' placeholder="PhotoURL" />

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" required />
                    {/* 
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" /> */}

                    <div className="relative">
                        <label className="label">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder="••••••••"
                            className="input input-bordered w-full"
                            required
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                        >
                            {show ? <FaEye /> : <IoEyeOff />}
                        </span>
                    </div>

                    <button className="btn btn-neutral mt-4">SignIn</button>

                    <p className="text-sm font-bold mt-3">
                        Allready have an account?{" "}
                        <NavLink to="/loginpage" className="text-blue-600 font-medium">
                            Login
                        </NavLink>
                    </p>
                </fieldset>
            </form>
        </section>
    );
};

export default Register;