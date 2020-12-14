<template>
  <div>
    <h2>
    Hello {{ username }}!
    </h2>

    <GameList title="Your games" :games="myGames" />
    <GameList title="Open games" :games="openGames" :showState="false" />
    <p>
      <a href="javascript:void(0);" @click="createGame">Create a new game</a>
    </p>
    <p>
      <a href="javascript:void(0);" @click="logout">Logout</a>
    </p>
  </div>
</template>

<script>
import GameList from '~/components/GameList.vue'

export default {
  components: {
    GameList,
  },
  middleware: 'auth',
  data() {
    return {
      myGames: [],
      openGames: [],
    }
  },
  computed: {
    username() {
      return this.$store.state.auth.username
    },
  },
  async fetch() {
    const resp = await this.$axios.$get('/game')

    this.myGames = resp.mine
    this.openGames = resp.open
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
