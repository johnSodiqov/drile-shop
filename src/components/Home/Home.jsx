import React from 'react';
import { Intro } from './Intro/Intro';
import { BestSeller } from './Best Sellers/BestSellers';
import { DealOfTheWeek } from './Deal of the week/DealOfTheWeek';
import { TrendingCategories } from './Trending Categories/TrendCategories';

const Home = () => {
    return (
        <div>
            <Intro />
            <BestSeller />
            <DealOfTheWeek />
            <TrendingCategories />
        </div>
    );
}

export default Home;
