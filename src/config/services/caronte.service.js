import { request, REQUEST_ADDRESS } from '../http-request'

const CARONTE = `${REQUEST_ADDRESS}/caronte/auth`

// eslint-disable-next-line import/prefer-default-export
export const getAccessToken = async (username, password) => request({
  url: CARONTE,
  method: 'post',
  data: {
    username,
    password
  }
})
