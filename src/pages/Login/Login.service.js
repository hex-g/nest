/* eslint-disable import/prefer-default-export */
import { request, REQUEST_ADDRESS } from '../../config/http-request'

export const getAccessToken = async (username, password) => request({
  url: `${REQUEST_ADDRESS}/caronte/auth`,
  method: 'post',
  data: {
    username,
    password
  }
})
