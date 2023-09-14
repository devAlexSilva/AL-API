import Axios from 'axios'

const URL = process.env.URL_WTA
const loginBody = {
  login: process.env.LOGIN_WTA,
  senha: process.env.SENHA_WTA
}
const axios = Axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  withCredentials: true
})

export const Login = async () => {
  try {
    const { data, headers } = await axios.post('/winthor/autenticacao/v1/login', loginBody)
    console.log(data, headers)
    return 'ok'

  } catch (error) {
    console.log(error)
    return 'fail'
  }
}