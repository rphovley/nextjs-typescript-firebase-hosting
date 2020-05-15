import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api/',
})


instance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // console.log(error.response)
  const { err } = error.response.data
  err.status = `${err.message}, status code: ${err.statusCode}`
  return Promise.reject(err)
})

export default instance
