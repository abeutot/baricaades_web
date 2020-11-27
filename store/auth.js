import { serialize as serializeCookie } from 'cookie'
import { btoa } from 'js-base64'

export const state = () => ({
  authenticated: false,
  username: '',
  token: '',
})

export const mutations = {
  set(state, credentials) {
    console.log('store login')

    state.username = credentials.username
    state.token = credentials.token
    state.authenticated = true

    if (process.client) {
      document.cookie = serializeCookie('username', credentials.username)
      document.cookie = serializeCookie('token', credentials.token)
    }

    this.$axios.setHeader('Authorization', 'Basic ' + btoa(credentials.username + ':' + credentials.token))
  },
  reset(state) {
    console.log('store logout')

    state.username = ''
    state.token = ''
    state.authenticated = false
    document.cookie = serializeCookie('username', '', { expires: new Date(0) })
    document.cookie = serializeCookie('token', '', { expires: new Date(0) })

    this.$axios.setHeader('Authorization', undefined)
  },
}
