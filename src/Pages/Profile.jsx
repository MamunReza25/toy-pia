import React, { use } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Profile = () => {

    const { updateUserProfile } = use(AuthContext);
    const navigate = useNavigate();
    const handleprofileUpdate = (e) => {
        // e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo)

        // update profile
        updateUserProfile(name, photo)
            .then((result) => {
                // console.log("Updated user:", result.user);
                window.location.reload();
                toast("update succesfully")

                navigate('/');
                setUser({ ...user, name, photo });

            })
            .catch((error) => {
                console.error("Update error:", error);
            });
    };



    return (
        <div className='flex justify-center items-center h-screen bg-purple-500'>
            <title>profile-update</title>

            <div className=' bg-purple-700 border-base-300 rounded-box w-xs border p-4 text-white'>
                <h1 className='text-2xl font-semibold text-center'>profile</h1>
                <form action="" onSubmit={handleprofileUpdate}>
                    <label>Name</label> <br />
                    <input type="text" name='name' placeholder='name' className='input text-black' required /> <br /> <br />
                    <label>photo</label> <br />
                    <input type="url" name='photo' placeholder='photo url' className='input text-black' required /> <br /> <br />
                    <input type="submit" onClick={() => navigate("/")} value={"Update Profile"} className='btn' />
                </form>
            </div>
        </div>
    );
};

export default Profile;