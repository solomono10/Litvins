import React, {useEffect} from 'react';
import SliderHeader from "../Sliders/SliderHeader";
import AboutClub from "../AboutClub";
import LatestResult from "../LatestResult";
import NextMatches from "../NextMatchs";
import News from "../News";
import Statistics from "./Statistics";
import {useDispatch, useSelector} from "react-redux";
import {getInfoHomePage} from "../../redux/HomeReducer";


export default function HomePage(){
    const dispatch = useDispatch()
    
    const lastMatch = useSelector(state => state.homePage.lastMatch)
    const listMatches = useSelector(state => state.homePage.listMatches)
    const newsList = useSelector(state => state.homePage.newsList)
    const infoAboutClub = useSelector(state => state.homePage.infoAboutClub)
    const nextMatch = useSelector(state => state.homePage.nextMatch)
    const statisticsPlayers = useSelector(state => state.homePage.statisticsPlayers)

    useEffect(() => {
        dispatch(getInfoHomePage())
    }, [])


    return(
        <div>
            <SliderHeader/>
            <LatestResult  lastMatch={lastMatch}/>
            <AboutClub infoAboutClub={infoAboutClub}/>
            <Statistics statisticsPlayers={statisticsPlayers}/>
            <NextMatches listMatches={listMatches} nextMatch={nextMatch}/>
            <News newsList={newsList}/>
        </div>
    )
}