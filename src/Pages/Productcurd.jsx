import React from 'react';


const Productcurd = ({ produc }) => {
    console.log(produc)
    const { pictureURL, toyName, availableQuantity, rating, price } = produc
    return (

        <div className="card bg-gray-200 w-96 shadow-sm border-2 border-amber-500">
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
                    <button className="btn btn-primary">View More</button>
                </div>
            </div>
        </div>

    );
};

export default Productcurd;