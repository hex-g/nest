import { request } from '../http-request'

const REQUEST_ADDRESS = 'http://104.198.143.12:8763/'

const CARONTE = `${REQUEST_ADDRESS}caronte/auth`

export const getAccessToken = async (username, password) => {
  return await request({
    url: CARONTE,
    method: 'post',
    data: {
      username,
      password,
    },
  })
}

