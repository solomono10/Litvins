import {authAPI} from "../api/api";


const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
const SET_AUTH_USER = 'SET_AUTH_USER';
const SUCCESS_LOG_OUT = 'SUCCESS_LOG_OUT';
const SUCCESS_ERROR = 'SUCCESS_ERROR';



const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_ERROR_AUTH_USER_DATA = 'SET_ERROR_AUTH_USER_DATA';


const initState = {
    error: null,
    isAuth: false,
    playerId: null,
    email: null,
    login: null,
    message:''
};


const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN: {
            return {
                ...state,
                userId: action.data.userId,
                isAuth: true
            }
        }
        case SUCCESS_LOG_OUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        case SET_AUTH_USER: {
            return {
                ...state,
                playerId: action.data.playerId,
                isAuth: true,
                message: action.data.message
            }
        }
        case SUCCESS_ERROR: {
            return {
                ...state,
                message: action.data.message
            }
        }
        default:
            return {...state}
    }
};

export const SuccessLogin = (data) => {
    return {type: SUCCESS_LOGIN, data}
};
export const SuccessLoginOut = (data) => {
    return {type: SUCCESS_LOG_OUT, data}
};
export const SetAuthUser = (data) => {
    return {type: SET_AUTH_USER, data}
};


export const logIn = (login, password) => async (dispatch) => {
    const res = await authAPI.login(login, password)
    console.log(res)
    // dispatch(SuccessLogin(res))
};
export const logOut = () => async (dispatch) => {
    const res = await authAPI.logOut()
    console.log(res)
    dispatch(SuccessLoginOut(res))
};
export const SuccessError = (data) => {
    return {type: SUCCESS_ERROR, data}
};
export const registration = (formData) => async (dispatch) => {
    const res = await authAPI.registration(formData)
    if (res.status === 201){
        dispatch(SetAuthUser(res.data))
    }else if(res.status === 400){
        dispatch(SuccessError(res.data))
        console.log(res)
    }
};

export default AuthReducer
