import { request } from '../http-request'

const REQUEST_ADDRESS = 'http://104.198.143.12:8762/'

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

export const requestPlayer = async (token = localStorage.getItem('access_token')) => {
    const playerResponse = await getPlayer(token)  
    
    console.log(playerResponse)
}