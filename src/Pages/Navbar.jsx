import React, { use } from 'react';
import { Navigate, NavLink } from 'react-router';
import { AuthContext } from '../ContextAuth/AuthContext';
import { toast } from 'react-toastify';



const Navbar = () => {
    const activeLink = ({ isActive }) =>
        isActive ? "text-primary font-bold" : "text-gray-700";
    const { user, Logout } = use(AuthContext);
    console.log(user?.photoURL)

    const handleLogout = () => {

        Logout()
            .then(result => {


                toast.success("logout succes")
                return <Navigate to={'/'}></Navigate>

            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (

        // kjjhh

        <div className='border border-red-500 md:container md:mx-auto px-2'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            <NavLink className={activeLink} to={'/'}><li className='text-2xl mr-5'>Home</li></NavLink>

                            <NavLink className={activeLink} to={'/popularToys'}><li className='text-2xl mr-5'>Popular Toys</li></NavLink>
                            <NavLink className={activeLink} to={'/profile'}><li className='text-2xl mr-5'>Profile</li></NavLink>

                            {use && (<NavLink className={activeLink} to={'/toydetails'}> <li className='text-2xl mr-5'>ToyDetails</li></NavLink>)
                            }



                        </ul>
                    </div>
                    <a className="text-2xl md:text-3xl text-primary font-extrabold ">TOY <span className='text-secondary'>PIA</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                        <NavLink className={activeLink} to={'/'}><li className='text-2xl mr-5'>Home</li></NavLink>

                        <NavLink className={activeLink} to={'/popularToys'}><li className='text-2xl mr-5'>Popular Toys</li></NavLink>
                        <NavLink className={activeLink} to={'/profile'}><li className='text-2xl mr-5'>Profile</li></NavLink>
                        <li className='text-2xl'>
                            {use && (<NavLink className={activeLink} to={'/toydetails'}> ToyDetails</NavLink>)
                            }
                        </li>

                    </ul>
                </div>
                <div className="navbar-end ">

                    {user ? (

                        <li className="relative group flex justify-center items-center
                            flex-row">

                            <img
                                src={user?.photoURL}
                                alt="Profile"
                                className=" w-10 h-10 md:w-20 md:h-20 rounded-full  cursor-pointer"
                            />


                            <span className="absolute left-0 top-25 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {user?.displayName}
                            </span>

                            <div> <button onClick={handleLogout} className="ml-10 btn btn-sm btn-outline ">Logout</button></div>
                        </li>

                    ) : (<NavLink to={'/loginpage'}><li className='text-2xl text-secondary font-extrabold cursor-progress '>LogIn</li></NavLink>)}
                </div>
            </div>
        </div>



    );
};

export default Navbar;