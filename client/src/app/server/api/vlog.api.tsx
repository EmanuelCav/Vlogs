import axios from 'axios';

import { IVlog } from '../../interfaces/Vlogs';

const api = axios.create({ baseURL: "http://localhost:2200" })

export const vlogsApi = async (token: string) => {
    return await api.get('/vlogs', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const createVlogApi = async (vlogData: IVlog, token: string) => {
    return await api.post('/createvlog', vlogData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

