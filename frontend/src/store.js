import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from '../node_modules/redux-thunk';
import TeamReducer from "./redux/TeamReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        form: formReducer,
        teamPage : TeamReducer
    })
,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store