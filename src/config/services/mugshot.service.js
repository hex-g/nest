import { request } from '../http-request'

const REQUEST_ADDRESS = 'http://104.198.143.12:8763/'

const MUGSHOT64 = `${REQUEST_ADDRESS}mugshot/base64`
const MUGSHOT = `${REQUEST_ADDRESS}mugshot`


export const getMugshot = async (auth) => {  
    return await request({
    headers: {Authorization: localStorage.getItem('access_token')},
    url: MUGSHOT64,
    method: 'get',
    data: {
      auth
    },
  })
}

export const postMugshot = async (file) => {

  var bodyFormData = new FormData();
  bodyFormData.append('image', file);

  return await request({
    url: MUGSHOT,
    headers: { Authorization: localStorage.getItem('access_token'), 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: bodyFormData,
  })
}

export const requestMugshot = async (token = localStorage.getItem('access_token')) => {
  const mugsponse = await getMugshot(token)  
  
  const src = "data:image/png;base64," + mugsponse.data

  return src
}