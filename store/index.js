import { parse as parseCookie } from 'cookie'
import { btoa } from 'js-base64'

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    const cookies = parseCookie(req.headers.cookie || '')
    if (cookies.username && cookies.token) {
      await dispatch('loadCredentials', {
        username: cookies.username,
        token: cookies.token,
      })
    }
  },
  async loadCredentials({ commit }, { username, token }) {
    console.log('will check credentials')
    /* check credentials are valid */
    try {
      const resp = await this.$axios.$get('/user/check', {
        headers: {
          'Authorization': 'Basic ' + btoa(username + ':' + token),
        },
      })
    } catch (err) {
      if (err.response !== undefined && err.response.status === 401) {
        return
      }

      throw err
    }

    commit('auth/set', { username: username, token: token })
  },
}
