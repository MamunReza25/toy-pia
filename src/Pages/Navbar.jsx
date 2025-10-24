import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../ContextAuth/AuthContext';

const Navbar = () => {
    const authyy = use(AuthContext)
    console.log(authyy)
    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar  container mx-auto">
                <div className="flex-1">
                    <a className=" text-3xl text-primary font-extrabold ">TOY <span className='text-secondary'>PIA</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={'/loginpage'}><li className='text-2xl text-secondary font-extrabold cursor-progress'>LogIn</li></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;