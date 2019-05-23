import { request } from '../../config/http-request'

const API_DO_HIRUMITSU = ''
const TEST_TOKEN = ''

export const saveEditorTest = async (directory, note, token) => {
  return await request({
    url: `${API_DO_HIRUMITSU}/kirby/note`,
    method: 'post',
    headers: { Authorization: token},
    data: {
      path: directory,
      content: note,
    }

  })
}