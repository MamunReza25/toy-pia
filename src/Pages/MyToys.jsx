import React, { Suspense, use } from 'react';
import MytoyCard from './MytoyCard';
const promiseData = fetch("/data.json").then((res) => res.json());
const MyToys = () => {
    const data = use(promiseData)
    console.log(data)
    return (
        <div>
            <h1 className='text-3xl text-secondary font-extrabold text-center pt-10 '> My Toys</h1>
            <div className='w-full md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 py-15 px-2'>


                <Suspense fallback={<p>lodding.....</p>}>
                    {data.map(product => <MytoyCard product={product}></MytoyCard>)}
                </Suspense>

            </div>
        </div>
    );
};

export default MyToys;