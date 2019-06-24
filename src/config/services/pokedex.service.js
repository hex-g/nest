import { request } from '../http-request'

const REQUEST_ADDRESS = 'https://hiveapi.bolognini.me/'

const POKEDEX = `${REQUEST_ADDRESS}pokedex/person`


export const getPokedex = async (auth) => { 
        return await request({
        headers: {Authorization: localStorage.getItem('access_token')},
        url: POKEDEX,
        method: 'get',
        data: {
            auth
        },
    })
}

export const requestPokedex = async (token = localStorage.getItem('access_token')) => {
    const PokedexResponse = await getPokedex(token)

    return PokedexResponse
}