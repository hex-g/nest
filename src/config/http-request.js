import axios from 'axios'

export const REQUEST_ADDRESS = 'http://35.153.196.161:8762'

export const request = ({
  url, ...options
}) => axios({
  ...options,
  url: `${url}`
})


const configInterceptorResponse = () => {
  axios.interceptors.response.use(
    response => response,
    error => {
      console.error(error)
      return Promise.reject(error)
    },
  )
}

const configInterceptorRequest = () => {
  axios.interceptors.request.use(config => config)
  return axios
}

export const requestConfig = () => {
  configInterceptorRequest()
  configInterceptorResponse()
}
