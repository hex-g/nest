import { request } from '../../config/http-request'

const REQUEST_ADDRESS = 'https://hiveapi.bolognini.me'

export const getAccessToken = async (username, password) => {
  return await request({
    url: `${REQUEST_ADDRESS}/caronte/auth`,
    method: 'post',
    data: {
      username,
      password,
    },
  })
}
