import React from 'react';

const CustomerCard = ({ customer }) => {
    console.log(customer)
    return (
        <div className='py-5'>
            <div className='bg-white shadow-2xl rounded-2xl'>
                <img src={customer.toyImg} className='rounded-2xl' alt="" />
                <div className='flex justify-between items-center py-5 px-5'>
                    <img src={customer.guardianImg} className='w-25 h-25 rounded-full border-amber-700' alt="" />
                    <p className='w-[400px] bg-purple-200 p-5 rounded-2xl'>{customer.feedback}</p>
                </div>
            </div>

        </div>
    );
};

export default CustomerCard;