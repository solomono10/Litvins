import {matchesApi} from "../api/api";

export const SET_MATCHES = 'RECENTCOMMENTS::SET_MATCHES'
export const SET_MATCH = 'RECENTCOMMENTS::SET_MATCH'
export const ADD_MATCH = 'RECENTCOMMENTS::ADD_MATCH'

const initState = {
    matches: [],
    match:{},
    message: ''
}

const MatchesReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_MATCHES: {
            return{
                ...state,
                matches:[...action.matches]
            }
        }
        case SET_MATCH: {
            return{
                ...state,
                match: action.match
            }
        }
        case ADD_MATCH: {
            return{
                ...state,
                message: action.data
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const setMatches = (matches) =>{
    return {
        type:SET_MATCHES,
        matches
    }
}
export const setMatch = (match) =>{
    return {
        type:SET_MATCH,
        match
    }
}
export const addMatch = (data) =>{
    return {
        type:ADD_MATCH,
        data
    }
}

export const getMatches = () => async (dispatch) => {
    const data = await matchesApi.getMatches()
    dispatch(setMatches(data))

}
export const getMatch = (matchId) => async (dispatch) =>{
    const data = await matchesApi.getMatch(matchId)
    dispatch(setMatch(data))
}
export const AddMatch = (matchInfo) => async (dispatch) =>{
    const data = await matchesApi.addMatch(matchInfo)
    dispatch(addMatch(data))
    dispatch(getMatches())
}

export default MatchesReducer