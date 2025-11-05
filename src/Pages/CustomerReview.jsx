import React from 'react';
import CustomerCard from './CustomerCard';


const feedbacks = [
    {
        id: 1,
        guardian: "Rima Akter",
        child: "Ayesha",
        location: "Dhaka",
        toy: "Building Blocks Set",
        feedback:
            "Playing with these blocks has made my daughter more creative and focused. Watching her imagination grow is wonderful!",
        rating: 5,
        toyImg: "https://i.ibb.co.com/y79crRX/toy1.webp",       // Toy image
        guardianImg: "https://i.ibb.co.com/b5VcmFH2/toy-g-1.jpgn", // Customer/Guardian image
    },
    {
        id: 2,
        guardian: "Tanvir Hossain",
        child: "Arif",
        location: "Chattogram",
        toy: "Puzzle Cube",
        feedback:
            "Solving the puzzles helps my son improve his problem-solving skills and patience. Very educational and fun!",
        rating: 5,
        toyImg: "https://i.ibb.co.com/gMMwSktf/toy-2.jpg",
        guardianImg: "https://i.ibb.co.com/DHJ15C7B/toy-g-2.jpg",
    },
    {
        id: 3,
        guardian: "Sadia Rahman",
        child: "Tania",
        location: "Rajshahi",
        toy: "Musical Toy Drum",
        feedback:
            "Playing the drum has enhanced my daughter’s coordination and rhythm. She enjoys every moment and learns through music.",
        rating: 4,
        toyImg: "https://i.ibb.co.com/GQRmtkW1/toy-3.jpg",
        guardianImg: "https://i.ibb.co.com/PsGZFdh4/toy-g-3.jpg",
    },
    {
        id: 4,
        guardian: "Naimul Karim",
        child: "Rafi",
        location: "Khulna",
        toy: "STEM Robot Kit",
        feedback:
            "The robot kit makes learning coding and science concepts fun for my son. It boosts his curiosity and confidence!",
        rating: 5,
        toyImg: "https://i.ibb.co.com/qLv0N3MQ/toy-4.jpg",
        guardianImg: "https://i.ibb.co.com/60fqwGzQ/toy-g-4.jpg",
    },
];


const CustomerReview = () => {
    return (
        <div>

            <h1 className='text-3xl text-purple-700 font-extrabold text-center pt-10 py-10 shadow-2xl'>Customer Feedback</h1>
            <div className='w-[1200px] mx-auto grid grid-cols-2 gap-10 '>
                {
                    feedbacks.map(customer => <CustomerCard customer={customer}></CustomerCard>)
                }
            </div>
        </div>
    );
};

export default CustomerReview;