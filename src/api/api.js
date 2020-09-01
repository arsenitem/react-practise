import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'api-key': '258a4411-02c2-4578-b017-2e6fabf18ad7'
    }
})

export const usersApi = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`);
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    }
};