import React, { Suspense, use } from 'react';
import Productcurd from './Productcurd';
const promiseData = fetch("/data.json").then((res) => res.json());

const PopularToys = () => {
    const data = use(promiseData)
    console.log(data)
    return (
        <div className='w-full md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 py-15 px-2'>
            <title>PopularToy</title>

            <Suspense fallback={<p>lodding.....</p>}>
                {data.map(produc => <Productcurd key={produc.toyId} produc={produc}></Productcurd>)}
            </Suspense>

        </div>
    );
};

export default PopularToys;