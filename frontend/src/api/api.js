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
    getLastMatch(){
        return instance.get(`/lastMatch`)
            .then(res => res.data)
    }
}
export const clubApi={
    getInfoClub(){
        return instance.get(`/club`)
            .then(res => res.data)
    },
    getInfoYear(id){
        return instance.get(`/club` +id)
            .then(res => res.data)
    }
}