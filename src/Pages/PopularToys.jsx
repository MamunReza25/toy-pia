import React, { Suspense, use } from 'react';
import Productcurd from './Productcurd';
const promiseData = fetch("/data.json").then((res) => res.json());

const PopularToys = () => {
    const data = use(promiseData)
    console.log(data)
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 py-15'>

            <Suspense fallback={<p>lodding.....</p>}>
                {data.map(produc => <Productcurd produc={produc}></Productcurd>)}
            </Suspense>

        </div>
    );
};

export default PopularToys;