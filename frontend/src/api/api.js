import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:4000/'
})

export const teamApi ={
    getPlayers(currentPage, pageSize){
        return instance.get(`team?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    putFilterPlayers(title){
        return instance.put(`team?filter=${title}`,{})
            .then(res => res.data)
    },
    getPlayer(userId){
       return instance.get(`team/player/`+userId)
           .then(res => res.data)
    }
}
export const matchesApi ={
    getMatches(){
        return instance.get(`list-matches`)
            .then(res => res.data)
    },
    getMatch(matchId){
        return instance.get(`list-matches/match/`+ matchId)
            .then(res => res.data)
    }
}
export const homeApi={
    getInfoHomePage(){
        return instance.get(`homeInfo`)
            .then(res => res.data)
    }
}
export const clubApi={
    getInfoClub(){
        return instance.get(`/club`)
            .then(res => res.data)
    },
    getInfoYear(id){
        return instance.get(`/club/year/`+id)
            .then(res => res.data)
    }
}
export const newsApi ={
    getListNews(currentPage, pageSize){
        return instance.get(`list-news?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getNews(newsId){
        return instance.get(`list-news/news/`+newsId)
            .then(res => res.data)
    }
}
export const contactApi ={
    getContacts(){
        return instance.get(`contact`)
            .then(res => res.data)
    }
}

export const authAPI = {
    login(login, password) {
        return instance.post(`auth/login`, {login, password})
    },
    logOut() {
        return instance.post(`auth/logout`)
    },
    registration(data){
        return instance.post(`register`,{data})
    }
};