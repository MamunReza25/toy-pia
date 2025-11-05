import React from 'react';
import Home from './Home';
import PopularToys from './PopularToys';
import EnjoyMoment from './EnjoyMoment';
import CustomerReview from './CustomerReview';

const HomePageLayout = () => {
    return (
        <div>
            <Home></Home>
            <PopularToys></PopularToys>
            <CustomerReview></CustomerReview>
            <EnjoyMoment></EnjoyMoment>
        </div>
    );
};

export default HomePageLayout;