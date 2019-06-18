import { request } from '../http-request'
import { getAccessToken } from './caronte.service'

const REQUEST_ADDRESS = 'http://104.198.143.12:8762/'

const MUGSHOT = `${REQUEST_ADDRESS}mugshot/base64`


export const getMugshot = async (auth) => {  
    return await request({
    url: MUGSHOT,
    method: 'get',
    data: {
      auth
    },
  })
}

export const requestMugshot = async () => {
  const response = await getAccessToken('admin', 'admin')
  response && response.headers && response.headers.authorization && console.log(response)

  const mugsponse = await getMugshot(response.headers.authorization)  
  
  const src = "data:image/png;base64," + mugsponse.data

  return src
}