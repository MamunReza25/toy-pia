import React, { use } from 'react';
import { NavLink } from 'react-router';
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

            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar  container mx-auto">
                <div className="flex-1">
                    <a className=" text-3xl text-primary font-extrabold ">TOY <span className='text-secondary'>PIA</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal">

                        <NavLink className={activeLink} to={'/'}><li className='text-2xl mr-5'>Home</li></NavLink>

                        <NavLink className={activeLink} to={'/popularToys'}><li className='text-2xl mr-5'>Popular Toys</li></NavLink>
                        <NavLink className={activeLink} to={'/profile'}><li className='text-2xl mr-5'>Profile</li></NavLink>

                        {user ? (
                            <li className="relative group flex justify-center items-center flex-row">
                                <img
                                    src={user?.photoURL}
                                    alt="Profile"
                                    className="w-20 h-20 rounded-full  cursor-pointer"
                                />


                                <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {user?.displayName}
                                </span>

                                <div> <button onClick={handleLogout} className="ml-10 btn btn-sm btn-outline">Logout</button></div>
                            </li>

                        ) : (<NavLink to={'/loginpage'}><li className='text-2xl text-secondary font-extrabold cursor-progress '>LogIn</li></NavLink>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;