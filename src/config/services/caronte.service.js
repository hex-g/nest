import { request } from '../http-request'

const REQUEST_ADDRESS = 'https://hiveapi.bolognini.me/'

const CARONTE = `${REQUEST_ADDRESS}caronte/auth`

// eslint-disable-next-line import/prefer-default-export
export const getAccessToken = async (username, password) => request({
  url: CARONTE,
  method: 'post',
  data: {
    username,
    password
  }
})
