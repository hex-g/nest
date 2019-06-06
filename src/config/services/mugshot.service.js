import { request } from '../http-request'

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

