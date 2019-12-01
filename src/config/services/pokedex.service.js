import { request, REQUEST_ADDRESS } from '../http-request'

const POKEDEX = `${REQUEST_ADDRESS}/pokedex/person`

export const getPokedex = async auth => request({
  headers: { Authorization: localStorage.getItem('access_token') },
  url: POKEDEX,
  method: 'get',
  data: {
    auth
  }
})

export const requestPokedex = async (token = localStorage.getItem('access_token')) => {
  const PokedexResponse = await getPokedex(token)
  return PokedexResponse
}
