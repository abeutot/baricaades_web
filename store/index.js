import { parse as parseCookie } from 'cookie'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const cookies = parseCookie(req.headers.cookie || '')
    if (cookies.username && cookies.token) {
      commit('auth/set', { username: cookies.username, token: cookies.token })
    }
  },
}
