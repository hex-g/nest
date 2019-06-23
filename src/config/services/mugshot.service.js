import { request } from '../http-request'

const REQUEST_ADDRESS = 'http://104.198.143.12:8762/'

const MUGSHOT = `${REQUEST_ADDRESS}mugshot`
const MUGSHOT64 = `${MUGSHOT}/base64`
const BANNER = `${MUGSHOT}/banner`
const BANNER64 = `${MUGSHOT64}/banner`


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

export const getBanner = async (auth) => {  
  return await request({
  headers: {Authorization: localStorage.getItem('access_token')},
  url: BANNER64,
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


export const postBanner = async (file) => {

  var bodyFormData = new FormData();
  bodyFormData.append('image', file);

  return await request({
    url: BANNER,
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


export const requestBanner = async (token = localStorage.getItem('access_token')) => {
  const mugsponse = await getBanner(token) 
  const src = "data:image/png;base64," + mugsponse.data

  return src
}