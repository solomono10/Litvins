import React, {lazy, Suspense, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import './App.css';

const InfoNews = React.lazy(() => import('./Component/InfoNews'));
const Club = React.lazy(() => import('./Component/Club'));
const InfoPlayer = React.lazy(() => import('./Component/InfoPlayers'));
const Team = React.lazy(() => import('./Component/Team'));
const NewsPage = React.lazy(() => import('./Component/NewsPage'));
const HomePage = React.lazy(() => import('./Component/HomePage'));
const ListMatches = React.lazy(() => import('./Component/ListMatches'));
const Match = React.lazy(() => import('./Component/Match'));
const Contact = React.lazy(() => import('./Component/Contact'));

function App() {
    return (
        <div className="App">
            <ScrollToTop/>
            <Header/>
            <Suspense fallback={<div style={{height:'100vh',backgroundColor:'#ed1c27'}}>Загрузка...</div>}>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/team" component={Team}/>
                <Route path="/team/player/:userId?" component={InfoPlayer}/>
                <Route path="/list-matches" component={ListMatches}/>
                <Route path="/matches/:matchId?" component={Match}/>
                <Route path="/club" component={Club}/>
                <Route path="/list-news" component={NewsPage}/>
                <Route path="/news/:newsId?" component={InfoNews}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
