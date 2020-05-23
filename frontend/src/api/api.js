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
    }
}