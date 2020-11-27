export default {
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://127.1:8080',
  },
  publicRuntimeConfig: {
    websocketBaseURL: process.env.WEBSOCKET_BASE_URL || 'ws://127.1:8080',
    axios: {
        baseURL: process.env.BASE_URL,
    },
  },
  plugins: ['~/plugins/auth.js'],
}
