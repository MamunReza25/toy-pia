import React, { use } from 'react';
import { AuthContext } from '../ContextAuth/AuthContext';
import { useNavigate } from 'react-router';


const Productcurd = ({ produc }) => {

    const { user } = use(AuthContext);
    console.log(produc)
    const { pictureURL, toyName, availableQuantity, rating, price, toyId } = produc;
    const navigate = useNavigate();
    const handelViewmoreBtn = (toyId) => {

        navigate(`/toydetails/${toyId}`)


    }


    return (

        <div className="card bg-gray-200 w-96 shadow-sm border-2 p-2 border-amber-500">

            <figure className='h-1/2'>
                <img
                    src={pictureURL}
                    alt={toyName} />
            </figure>
            <div className="card-body h-1/2">
                <h2 className="card-title"> ToyName:{toyName}</h2>
                <p className='text-[18px] font-bold text-secondary'> Rating :{rating}</p>
                <p className='text-[18px] font-bold text-secondary'> Quantity :{availableQuantity}</p>
                <p className='text-[18px] font-bold text-secondary'> Price :{price}</p>
                <div className="card-actions justify-end">

                    <button onClick={() => handelViewmoreBtn(toyId)} className="btn btn-primary">View More</button>



                </div>
            </div>
        </div>

    );
};

export default Productcurd;