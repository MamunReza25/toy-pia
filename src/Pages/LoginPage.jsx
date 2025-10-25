import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../ContextAuth/AuthContext';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { signIn, signInWithGoogle } = use(AuthContext)
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signIn(email, password)

            .then(result => {
                console.log(result.user)
                const user = result.user;

                if (!user.emailVerified) {
                    toast.warning("Email not verified! Please verify first ❗");

                    // Redirect to Register page
                    setTimeout(() => {
                        navigate("/register");
                    }, 1500);

                    return;
                }
                navigate("/toydetails");
                toast("login succesfully..")
            })
            .catch(error => {
                toast.error(error.message)
            });


    }


    const handlegoogle = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("google succesfully")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <section className='px-2 md:px-30 py-2 md:py-10 bg-yellow-100'>
            <form action="" onSubmit={handleLogIn}>

                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold px-4 md:px-30">Login now!</h1>
                            <p className="py-4 md:py-6 px-2 md:px-30">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                    <h1 className='text-2xl text-center font-bold text-secondary'>Or</h1>
                                    <button onClick={handlegoogle} className="btn btn-primary mt-4">google</button>



                                    <p className="text-sm mt-3">
                                        Don’t have an account?{" "}
                                        <NavLink to="/register" className="text-blue-600 font-medium">
                                            Register
                                        </NavLink>
                                    </p>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default LoginPage;