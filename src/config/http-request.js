import axios from 'axios'

export const request = ({
  url, ...options
<<<<<<< HEAD
}) => {
  return axios({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': options.data.auth
  },
=======
}) => axios({
>>>>>>> dev
  ...options,
  url: `${url}`,
})
}

const configInterceptorResponse = () => {
  axios.interceptors.response.use(
    response => response
    , error => {
      console.log(error)
      return Promise.reject(error)
    },
  )
}

const configInterceptorRequest = () => {
  axios.interceptors.request.use(config => {
    return config
  })
  return axios
}

export const requestConfig = () => {
  configInterceptorRequest()
  configInterceptorResponse()
}