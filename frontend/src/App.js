import React, {Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./Component/MainComponent/Header";
import Footer from "./Component/MainComponent/Footer";
import ScrollToTop from "./Component/ScrollToTop";
import './App.css';

const HomePage = React.lazy(() => import('./Component/MainComponent/HomePage'));
const Team = React.lazy(() => import('./Component/MainComponent/Team'));
const InfoPlayer = React.lazy(() => import('./Component/InfoPlayers'));
const ListMatches = React.lazy(() => import('./Component/MainComponent/ListMatches'));
const Match = React.lazy(() => import('./Component/MainComponent/Match'));
const Club = React.lazy(() => import('./Component/MainComponent/Club'));
const NewsPage = React.lazy(() => import('./Component/MainComponent/NewsPage'));
const InfoNews = React.lazy(() => import('./Component/MainComponent/InfoNews'));
const Contact = React.lazy(() => import('./Component/MainComponent/Contact'));
const Login = React.lazy(() => import('./Component/MainComponent/Login'));
const Logout = React.lazy(() => import('./Component/MainComponent/LogOut'));
const Registration = React.lazy(() => import('./Component/MainComponent/Registration'));



export default function App() {
    return (
        <div className="App">
            <ScrollToTop/>
            <Header/>
            <Suspense fallback={<div style={{height:'100vh',backgroundColor:'#ed1c27'}}>Загрузка...</div>}>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/team" component={Team}/>
                <Route path="/team/player/:userId?" component={InfoPlayer}/>
                <Route exact path="/list-matches" component={ListMatches}/>
                <Route path="/list-matches/match/:matchId?" component={Match}/>
                <Route path="/club" component={Club}/>
                <Route exact path="/list-news" component={NewsPage}/>
                <Route path="/list-news/news/:newsId?" component={InfoNews}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/registration" component={Registration}/>
            </Switch>
            </Suspense>
            <Footer/>
        </div>
    );
}
