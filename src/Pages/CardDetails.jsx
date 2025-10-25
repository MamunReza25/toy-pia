import React from 'react';
import { toast } from 'react-toastify';

const CardDetails = ({ singleProduct }) => {

    const { pictureURL, toyName, availableQuantity, rating, price, description, sellerEmail, sellerName, subCategory, toyId } = singleProduct;

    const productFrom = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email)
        toast.success(`Thank you ${name}! Your try now request has been submitted.`);
        e.target.reset();
    }
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-sm border border-amber-600">
                <figure className='w-[60%]'>
                    <img className='w-full h-full'
                        src={pictureURL}
                        alt={toyName} />
                </figure>
                <div className="card-body w-[40%]">
                    <h2 className="card-title">Product Name:{toyName}</h2>
                    <h3>Sub Category:{subCategory}</h3>
                    <p>Description:{description}</p>
                    <div className='flex justify-between items-center'>
                        <p>AvailableQuantity:{availableQuantity}</p>
                        <p>Rating{rating}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>SellerName{sellerName}</p>
                        <p>SellerEmail:{sellerEmail}</p>

                    </div>
                    <p>price:{price}</p>

                    <form action="" onSubmit={productFrom}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <label className="label">Name</label>
                            <input type="text" className="input" name='name' placeholder="Name" />
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <button className="btn btn-neutral mt-4">Try Now!</button>
                        </fieldset>
                    </form>

                </div>
            </div>
        </>
    );
};

export default CardDetails;