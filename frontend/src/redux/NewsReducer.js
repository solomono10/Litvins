import {newsApi} from "../api/api";


export const SET_LIST_NEWS = 'RECENTCOMMENTS::SET_LIST_NEWS'
export const SET_NEWS = 'RECENTCOMMENTS::SET_NEWS'
export const SET_CURRENT_PAGE = 'RECENTCOMMENTS::SET_CURRENT_PAGE'
export const SET_TOTAL_NEWS_COUNT = 'RECENTCOMMENTS::SET_TOTAL_USERS_COUNT'

const initState = {
    newsList: [],
    pageSize:9,
    currentPage:1,
    totalPlayersCount: 0,
    news:{}
}

const NewsReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_LIST_NEWS: {
            return{
                ...state,
                newsList:[...action.data]
            }
        }
        case SET_NEWS: {
            return{
                ...state,
                news: action.data
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_NEWS_COUNT: {
            return {
                ...state,
                totalPlayersCount: action.count
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const setListNews = (data) =>{
    return {
        type:SET_LIST_NEWS,
        data
    }
}
export const setNews = (data) =>{
    return {
        type:SET_NEWS,
        data
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
        type: SET_TOTAL_NEWS_COUNT,
        count: totalUserCount
    }
};


export const getListNews = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    const data = await newsApi.getListNews(currentPage,pageSize)
    dispatch(setTotalUsersCount(data.pager.totalItems))
    dispatch(setListNews(data.pageOfItems))
}
export const getNews = (newsId) => async (dispatch) =>{
    const data = await newsApi.getNews(newsId)
    dispatch(setNews(data))
}

export default NewsReducer