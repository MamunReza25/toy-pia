import React, { Suspense, use } from 'react';
import Productcurd from './Productcurd';
const promiseData = fetch("/data.json").then((res) => res.json());

const PopularToys = () => {
    const data = use(promiseData)
    console.log(data)
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-3xl text-secondary font-extrabold text-center pt-10 '> Upcoming Popular Toys</h1>
            <div className='md:container md:mx-auto grid grid-cols-1 gap-5 md:grid-cols-3  py-15'>


                <Suspense fallback={<p>lodding.....</p>}>
                    {data.slice(0, 6).map(produc => <Productcurd key={produc.toyId} produc={produc}></Productcurd>)}
                </Suspense>

            </div>
        </div>
    );
};

export default PopularToys;