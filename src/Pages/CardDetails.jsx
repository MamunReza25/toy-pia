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
                <div className="card-body  w-full md:w-[40%]">
                    <h2 className="card-title "><span className='font-bold'>Product Name:</span>{toyName}</h2>
                    <h3 className='card-title'>Sub Category:{subCategory}</h3>
                    <p className='text-[16px] text-secondary'><span className='card-title text-black'>Description:</span>{description}</p>
                    <div className='flex justify-between items-center card-title '>
                        <p>AvailableQuantity: <span className='text-secondary font-extrabold'>{availableQuantity}</span> </p>
                        <p>Rating : <span className='text-secondary font-extrabold'>{rating}</span> </p>
                    </div>
                    <div className='flex flex-col card-title'>
                        <p>SellerName :{sellerName}</p>
                        <p>SellerEmail:{sellerEmail}</p>

                    </div>
                    <p className='text-center text-2xl font-semibold'>price: <span className='text-3xl text-secondary font-extrabold'>{price} $
                    </span> </p>

                    <form action="" onSubmit={productFrom}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <label className="label text-2xl font-bold">Name</label>
                            <input type="text" className="input" name='name' placeholder="Name" required />
                            <label className="label text-2xl font-bold">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" required />
                            <button className="btn bg-secondary text-2xl font-bold mt-4">Try Now!</button>
                        </fieldset>
                    </form>

                </div>
            </div>
        </>
    );
};

export default CardDetails;