import { request, REQUEST_ADDRESS } from '../http-request'

const MUGSHOT = `${REQUEST_ADDRESS}/mugshot`
const MUGSHOT64 = `${MUGSHOT}/base64`
const BANNER = `${MUGSHOT}/banner`
const BANNER64 = `${MUGSHOT64}/banner`


export const getMugshot = async auth => request({
  headers: { Authorization: localStorage.getItem('access_token') },
  url: MUGSHOT64,
  method: 'get',
  data: {
    auth
  }
})

export const getBanner = async auth => request({
  headers: { Authorization: localStorage.getItem('access_token') },
  url: BANNER64,
  method: 'get',
  data: {
    auth
  }
})

export const postMugshot = async file => {
  const bodyFormData = new FormData()
  bodyFormData.append('image', file)

  return request({
    url: MUGSHOT,
    headers: { Authorization: localStorage.getItem('access_token'), 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: bodyFormData
  })
}


export const postBanner = async file => {
  const bodyFormData = new FormData()
  bodyFormData.append('image', file)

  return request({
    url: BANNER,
    headers: { Authorization: localStorage.getItem('access_token'), 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: bodyFormData
  })
}


export const requestMugshot = async (token = localStorage.getItem('access_token')) => {
  const mugsponse = await getMugshot(token)
  const src = `data:image/png;base64,${mugsponse.data}`

  return src
}


export const requestBanner = async (token = localStorage.getItem('access_token')) => {
  const mugsponse = await getBanner(token)
  const src = `data:image/png;base64,${mugsponse.data}`

  return src
}
