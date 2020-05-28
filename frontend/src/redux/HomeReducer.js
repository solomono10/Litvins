import {homeApi} from "../api/api";

export const SET_LAST_MATCHES = 'RECENTCOMMENTS::SET_LAST_MATCHES'

const initState = {
    lastMatch:{}
}

const HomeReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_LAST_MATCHES: {
            return {
                ...state,
                lastMatch: action.lastMatch
            }
        }
        default:
            return {
                ...state
            }
    }
}
export const setLastMatches = (lastMatch) =>{
    return {
        type:SET_LAST_MATCHES,
        lastMatch
    }
}
export const getLastMatch = () => async (dispatch) =>{
    const data = await homeApi.getLastMatch()
    console.log(data)
    dispatch(setLastMatches(data))
}

export default HomeReducer