export default function ({ redirect, store, route }) {
  if (store.state.auth.authenticated) {
    return
  }

  redirect('/register', { redirect: route.fullPath })
}
