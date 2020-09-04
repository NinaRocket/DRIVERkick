import React from 'react';
import HomeNavBar from '../HomeNavBar';
import GlobalNavBar from '../../GlobalNavBar';
import HomeHero from '../HomeHero';
import HomeFeatureBlock from '../HomeFeatureBlock';

function HomePage() {
    return (
        <div>
            {/* <HomeNavBar /> */}
            <GlobalNavBar />
            <HomeHero />
            <HomeFeatureBlock />
        </div>
    );
}

export default HomePage;