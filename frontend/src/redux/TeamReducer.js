import {teamApi} from "../api/api";

export const SET_PLAYERS = 'RECENTCOMMENTS::SET_PLAYERS'
export const SET_CURRENT_PAGE = 'RECENTCOMMENTS::SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'RECENTCOMMENTS::SET_TOTAL_USERS_COUNT'
export const SET_FILTER_PLAYERS = 'RECENTCOMMENTS::SET_FILTER_PLAYERS'

const initState = {
    players: [],
    pageSize:8,
    currentPage:1,
    totalPlayersCount: 0
}

const TeamReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_PLAYERS: {
            return{
                ...state,
                players:[...action.players]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalPlayersCount: action.count
            }
        }
        case SET_FILTER_PLAYERS:{
            return {
                ...state,
                players:[...action.players]
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const setPlayers = (players) =>{
    return {
        type:SET_PLAYERS,
        players
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCount = (totalUserCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUserCount
    }
};
export const setFilterPlayers = (players) =>{
    return{
        type:SET_FILTER_PLAYERS,
        players
    }
}

export const getPlayers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    const data = await teamApi.getPlayers(currentPage,pageSize)
    dispatch(setTotalUsersCount(data.pager.totalItems))
    dispatch(setPlayers(data.pageOfItems))
}

export const putFilterPlayers = (item) => async (dispatch) =>{
    const data = await teamApi.putFilterPlayers(item)
    console.log(data)
    dispatch(setCurrentPage(data.pager.currentPage))
    dispatch(setTotalUsersCount(data.pager.totalItems))
    dispatch(setFilterPlayers(data.pageOfItems))
}

export default TeamReducer