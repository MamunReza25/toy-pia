import React, { Suspense, use } from 'react';
import CardDetails from './CardDetails';
import { useParams } from 'react-router';
const promise = fetch("/data.json").then((res) => res.json());
const ToyDetailesPage = () => {
    const { id } = useParams();

    const producData = use(promise)
    console.log(producData, id)
    const singleProduct = producData.find(product => product.toyId == id);
    console.log(singleProduct)
    return (
        <div className='container mx-auto'>
            <title>toydetails</title>
            <Suspense fallback={<p>data loadding</p>}>
                {
                    singleProduct ? <CardDetails singleProduct={singleProduct} ></CardDetails> : <p className="text-center text-red-500 text-xl">Product Not Found</p>
                }

            </Suspense>
        </div>
    );
};

export default ToyDetailesPage;