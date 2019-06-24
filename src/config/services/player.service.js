import { request } from '../http-request'

const REQUEST_ADDRESS = 'https://hiveapi.bolognini.me/'

const PLAYER = `${REQUEST_ADDRESS}player`


export const getPlayer = async (auth) => { 
        return await request({
        headers: {Authorization: localStorage.getItem('access_token')},
        url: PLAYER,
        method: 'get',
        data: {
            auth
        },
    })
}

export const postPlayer = async (userInfo) => {
    return await request({
        url: PLAYER,
        headers: { Authorization: localStorage.getItem('access_token'), 'Content-Type': 'application/json' },
        method: 'post',
        data: userInfo
    })
}

export const requestPlayer = async (token = localStorage.getItem('access_token')) => {
    const playerResponse = await getPlayer(token)

    return playerResponse
}