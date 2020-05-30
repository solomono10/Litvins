import {homeApi} from "../api/api";

export const SET_LAST_MATCHES = 'RECENTCOMMENTS::SET_LAST_MATCHES'
export const SET_INFO_ABOUT_CLUB = 'RECENTCOMMENTS::SET_INFO_ABOUT_CLUB'
export const SET_STATISTICS = 'RECENTCOMMENTS::SET_STATISTICS'
export const SET_NEXT_MATCH = 'RECENTCOMMENTS::SET_NEXT_MATCH'
export const SET_NEXT_MATCHES_LIST = 'RECENTCOMMENTS::SET_NEXT_MATCHES_LIST'
export const SET_NEWS_LIST = 'RECENTCOMMENTS::SET_NEWS_LIST'


const initState = {
    lastMatch:{},
    listMatches:[],
    newsList:[],
    infoAboutClub:{},
    nextMatch:{},
    statisticsPlayers:[]
}

const HomeReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_LAST_MATCHES: {
            return {
                ...state,
                lastMatch: action.data
            }
        }
        case SET_INFO_ABOUT_CLUB: {
            return {
                ...state,
                infoAboutClub: action.data
            }
        }
        case SET_STATISTICS: {
            return {
                ...state,
                statisticsPlayers: [...action.data]
            }
        }
        case SET_NEXT_MATCH: {
            return {
                ...state,
                nextMatch: action.data
            }
        }
        case SET_NEXT_MATCHES_LIST: {
            return {
                ...state,
                listMatches: [...action.data.pageOfItems]
            }
        }
        case SET_NEWS_LIST: {
            return {
                ...state,
                newsList: [...action.data.pageOfItems]
            }
        }
        default:
            return {
                ...state
            }
    }
}
export const setLastMatches = (data) =>{
    return {
        type:SET_LAST_MATCHES,
        data
    }
}
export const setInfoAboutClub = (data) =>{
    return {
        type:SET_INFO_ABOUT_CLUB,
        data
    }
}
export const setStatistics = (data) =>{
    return {
        type:SET_STATISTICS,
        data
    }
}
export const setNextMatch = (data) =>{
    return {
        type:SET_NEXT_MATCH,
        data
    }
}
export const setNextMatchesList = (data) =>{
    return {
        type:SET_NEXT_MATCHES_LIST,
        data
    }
}
export const setNewsList = (data) =>{
    return {
        type:SET_NEWS_LIST,
        data
    }
}


export const getInfoHomePage = () => async (dispatch) =>{
    const data = await homeApi.getInfoHomePage()
    console.log(data)
    dispatch(setLastMatches(data.searchLastMatchValue))
    dispatch(setInfoAboutClub(data.infoAboutClub))
    dispatch(setStatistics(data.statisticsPlayers))
    dispatch(setNextMatch(data.nextMatch))
    dispatch(setNextMatchesList(data.listMatches))
    dispatch(setNewsList(data.newsList))
}

export default HomeReducer