import axios from 'axios';

import { IUserL, IUserR } from '../../interfaces/User';

const api = axios.create({ baseURL: "http://localhost:2200" })

export const usersApi = async (token: string, email: string) => {
    return await api.get(`/users/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getUserApi = async (id: number, token: string) => {
    return await api.get(`/user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const loginApi = async (userData: IUserL) => {
    return await api.post('/login', userData, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const registerApi = async (userData: IUserR) => {
    return await api.post(`/register`, userData, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const updateProfileApi = async (userData: any, id: number, token: string) => {
    return await api.put(`/users/${id}`, userData, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
}