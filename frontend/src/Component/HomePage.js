import React, {useEffect} from 'react';
import SliderHeader from "./SliderHeader";
import AboutClub from "./AboutClub";
import LatestResult from "./LatestResult";
import NextMatches from "./NextMatchs";
import News from "./News";
import Statistics from "./Statistics";


const HomePage = () =>{
    return(
        <div>
            <SliderHeader/>
            <LatestResult />
            <AboutClub/>
            <Statistics/>
            <NextMatches/>
            <News/>
        </div>
    )
}

export default HomePage