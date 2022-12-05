import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:2200" })

export const vlogsApi = async (token: string) => {
    return await api.get('/vlogs', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const myVlogsApi = async (id: number, token: string) => {
    return await api.get(`/myvlogs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getVlogApi = async (id: string, token: string) => {
    return await api.get(`/vlogs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const createVlogApi = async (vlogData: any, token: string) => {
    return await api.post('/createvlog', vlogData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteVlogApi = async (id: string, token: string) => {
    return await api.delete(`/vlogs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const likeVlogApi = async (vlogData: any, id: string, token: string) => {
    return await api.patch(`/vlogs/${id}`, vlogData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const unlikeVlogApi = async (vlogData: any, id: string, token: string) => {
    return await api.patch(`/unvlogs/${id}`, vlogData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

