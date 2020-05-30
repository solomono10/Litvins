import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from '../node_modules/redux-thunk';
import TeamReducer from "./redux/TeamReducer";
import MatchesReducer from "./redux/MatchsReducer";
import HomeReducer from "./redux/HomeReducer";
import ClubReducer from "./redux/ClubReducer";
import NewsReducer from "./redux/NewsReducer";
import ContactReducer from "./redux/ContactReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        form: formReducer,
        teamPage: TeamReducer,
        matchesPage: MatchesReducer,
        homePage: HomeReducer,
        clubPage: ClubReducer,
        newsPage: NewsReducer,
        contactPage: ContactReducer
    })
    , composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store