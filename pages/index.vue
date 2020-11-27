<template>
  <div>
    <h2>
    Hello {{ username }}!
    </h2>

    <p>
      <a href="javascript:void(0);" @click="createGame">Create a new game</a>
    </p>
    <p>
      <a href="javascript:void(0);" @click="logout">Logout</a>
    </p>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  computed: {
    username() {
      return this.$store.state.auth.username
    },
  },
  methods: {
    async createGame() {
      const resp = await this.$axios.$post('/game')

      this.$router.push('/game/' + resp.id)
    },
    logout() {
      this.$store.commit('auth/reset')
      this.$router.push('/register')
    },
  },
}
</script>
