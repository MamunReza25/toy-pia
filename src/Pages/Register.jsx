import React, { use } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, updateUserProfile, emailvarified } = use(AuthContext)
    console.log(createUser)

    const handleRegister = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("Register clicl here...", name, photo, email, password)
        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photo)
                    .then(result => {
                        emailvarified()
                            .then(() => {
                                toast("Send a email vafiy...");
                            })
                            .catch(error => {
                                toast(error.message)
                            })


                    })
                    .catch(error => {
                        toast(error.message)
                    })
                console.log(result.user)

            })
            .catch(error => {
                toast(error.message)
            })
    }




    return (
        <section className='flex justify-center items-center py-10'>
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