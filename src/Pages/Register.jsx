import React, { use } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Register = () => {
    const { createUser, updateUserProfile, emailvarified, Logout } = use(AuthContext)
    console.log(createUser)
    const navigate = useNavigate();
    const handleRegister = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Register clicl here...", name, photo, email, password)
        createUser(email, password)
            .then(result => {
                // updateprofile
                updateUserProfile(name, photo)
                    .then(() => {
                        // email verifed
                        emailvarified()
                            .then(result => {
                                toast("Send a email vafiy...");
                                // logout
                                Logout()
                                    .then(() => {
                                        navigate('/loginpage');
                                    })
                            }).catch(error => {
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
                        "User already exists in the database. Etai bastob haahahahaha"
                    );
                } else if (e.code === "auth/weak-password") {
                    toast.error("Bhai tomake at least 6 ta digit er pass dite hobe");
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
                    <input type="text" className="input" name='name' placeholder="Name" />

                    <label className="label">Photo</label>
                    <input type="file" className="input" name='photo' placeholder="PhotoURL" />

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />

                    <button className="btn btn-neutral mt-4">SignIn</button>


                </fieldset>
            </form>
        </section>
    );
};

export default Register;