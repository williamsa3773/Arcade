import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/login', loginData)
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${ resp.data.token }`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${ resp.data.token }`
  return resp.data.user
}