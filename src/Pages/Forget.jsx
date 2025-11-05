import React, { use, useRef } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";


const Forget = () => {
    const { forgetPassword } = use(AuthContext);
    const emailRef = useRef(null);
    const navigate = useNavigate();


    const handleReset = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;

        if (!email) {
            return toast.error("Please enter your email address!");
        }

        forgetPassword(email)
            .then(() => {
                toast.success("Password reset email sent!");
                setTimeout(() => navigate("/loginpage"), 2000);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-yellow-100">
            <div className="card bg-base-100 shadow-xl w-full max-w-md p-6">
                <h1 className="text-3xl font-bold text-center mb-4">Reset Password</h1>
                <p className="text-center text-gray-500 mb-6">
                    Enter your email address to receive a password reset link.
                </p>

                <form onSubmit={handleReset}>
                    <label className="label">Email</label>
                    <input
                        type="email"
                        ref={emailRef}
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        required
                    />

                    <button type="submit" className="btn btn-neutral w-full mt-4">
                        Send Reset Link
                    </button>

                    <p className="mt-4 text-center">
                        <span>Remember your password? </span>
                        <span
                            onClick={() => navigate("/loginpage")}
                            className="text-blue-600 font-semibold cursor-pointer"
                        >
                            Back to Login
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Forget;