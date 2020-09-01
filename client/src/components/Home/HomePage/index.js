import React from 'react';
import HomeNavBar from '../HomeNavBar';
import HomeHero from '../HomeHero';
import HomeFeatureBlock from '../HomeFeatureBlock';

function HomePage() {
    return (
        <div>
            <HomeNavBar />
            <HomeHero />
            <HomeFeatureBlock />
        </div>
    );
}

export default HomePage;