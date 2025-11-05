import React from 'react';
import imgEnjoy18 from '../assets/18.jpg';
import imgEnjoy19 from '../assets/19.jpg';
import imgEnjoy20 from '../assets/20.jpg';
import imgEnjoy21 from '../assets/21.jpg';
import imgEnjoy22 from '../assets/22.jpg';
import imgEnjoy23 from '../assets/23.jpg';

const EnjoyMoment = () => {
    return (
        <div className='w-full md:container'>
            <div className='text-center py-10 text-secondary'>
                <h1 className='text-3xl font-extrabold text-purple-700 py-2'>Our Lovely Movements</h1>
                <p className='text-[18px] font-semibold'>Perceived end knowledge certainly day sweetness why cordially</p>
            </div>
            <div className='grid grid-cols-2 gap-10 pb-15 w-full md:w-[1020px] mx-auto'>
                <img src={imgEnjoy18} alt="img" />
                <img src={imgEnjoy19} alt="img" />
                <img src={imgEnjoy20} alt="img" />
                <img src={imgEnjoy21} alt="img" />
                <img src={imgEnjoy22} alt="img" />
                <img src={imgEnjoy23} alt="img" />
            </div>
        </div>
    );
};

export default EnjoyMoment;