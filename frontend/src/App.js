import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./Component/Header";
import Club from "./Component/Club";
import InfoPlayer from "./Component/InfoPlayers";
import Team from "./Component/Team";
import NewsPage from "./Component/NewsPage";
import HomePage from "./Component/HomePage";
import InfoNews from "./Component/InfoNews";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import './App.css';
import ListMatches from "./Component/ListMatches";
import Match from "./Component/Match";
import Contact from "./Component/Contact";


function App() {

    return (
        <div className="App">
            <ScrollToTop/>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/team" component={Team}/>
                <Route path="/player/:userId?" render ={()=> <InfoPlayer/>}/>
                <Route path="/list-matches" component={ListMatches}/>
                <Route path="/matches/:matchId?" component={Match}/>
                <Route path="/club" component={Club}/>
                <Route path="/list-news" component={NewsPage}/>
                <Route path="/news/:newsId?" render ={()=> <InfoNews/>}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
