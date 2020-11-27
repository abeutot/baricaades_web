<template>
  <form @submit.prevent="join">
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username" :disabled="disable" />
    <button type="submit" :disabled="disable">Join</button>
    <p class="error" v-if="error !== ''">{{ error }}</p>
  </form>
</template>

<script>
export default {
  middleware({ store, route, redirect }) {
    if (store.state.auth.authenticated) {
      return redirect(route.query['redirect'] || '/')
    }
  },
  data() {
    return {
      username: '',
      disable: false,
      error: '',
    }
  },
  methods: {
    async join() {
      this.disable = true

      try {
        const resp = await this.$axios.$post('/user/register', { username: this.username })

        this.$store.commit('auth/set', resp)
      } catch (err) {
        console.log('err:', err.response)
        if (err.response.status === 400) {
          this.error = err.response.data.error
          this.disable = false
          return
        }
        throw err
      }

      this.$router.push(this.$route.query['redirect'] || '/')
    },
  },
}
</script>

<style>
.error {
  color: red;
}
</style>
