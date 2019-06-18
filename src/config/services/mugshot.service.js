import { request } from '../http-request'

const REQUEST_ADDRESS = 'http://104.198.143.12:8762/'

const MUGSHOT = `${REQUEST_ADDRESS}mugshot/base64`


export const getMugshot = async (auth) => {  
    return await request({
    headers: {Authorization: localStorage.getItem('access_token')},
    url: MUGSHOT,
    method: 'get',
    data: {
      auth
    },
  })
}

export const requestMugshot = async () => {
  const mugsponse = await getMugshot(localStorage.getItem('access_token'))  
  
  const src = "data:image/png;base64," + mugsponse.data

  return src
}