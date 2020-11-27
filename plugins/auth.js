import { btoa } from 'js-base64'

export default function ({ $axios, store }) {
  if (store.state.auth.authenticated) {
    /* if auth store is set on SSR, then we need to set the auth header on the
     * client side */
    $axios.setHeader('Authorization', 'Basic ' + btoa(store.state.auth.username + ':' + store.state.auth.token))
  }
}
