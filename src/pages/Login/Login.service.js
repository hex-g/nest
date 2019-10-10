/* eslint-disable import/prefer-default-export */
import { request } from '../../config/http-request'

const REQUEST_ADDRESS = 'https://hiveapi.bolognini.me'

export const getAccessToken = async (username, password) => request({
  url: `${REQUEST_ADDRESS}/caronte/auth`,
  method: 'post',
  data: {
    username,
    password
  }
})
