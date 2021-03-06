import { request, REQUEST_ADDRESS } from '../http-request'

const PLAYER = `${REQUEST_ADDRESS}/player`


export const getPlayer = async auth => request({
  headers: { Authorization: localStorage.getItem('access_token') },
  url: PLAYER,
  method: 'get',
  data: {
    auth
  }
})

export const postPlayer = async userInfo => request({
  url: PLAYER,
  headers: { Authorization: localStorage.getItem('access_token'), 'Content-Type': 'application/json' },
  method: 'post',
  data: userInfo
})

export const requestPlayer = async (token = localStorage.getItem('access_token')) => {
  const playerResponse = await getPlayer(token)
  return playerResponse
}
