<template>
<div>
  <div class="panel_left" v-if="game !== null">
    <p v-if="game.state === 'WAITING_FOR_PLAYERS' && username === game.players[0]">
      <button @click="startGame()">Start the game!</button>
    </p>
    <p>
      Dice:
      <template v-if="game.dice !== 0">{{ game.dice }}</template>
      <template v-else>???</template>
      <template v-if="currentStep == 0">
      <button @click="rollTheDice()">Roll</button>
      </template>
    </p>
    <p>
      {{ steps[currentStep] }}
    </p>
    <p v-if="error !== null" class="error">
      {{ error }}
    </p>
  </div>
  <div v-else>
    You are not part of this game. Would you like to join?
    <button @click="joinGame()">Yes</button>
  </div>
  <table v-if="game !== null">
    <tr>
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
      <th>H</th>
      <th>I</th>
      <th>J</th>
      <th>K</th>
      <th>L</th>
      <th>M</th>
      <th>N</th>
      <th>O</th>
      <th>P</th>
      <th>Q</th>
      <th></th>
    </tr>
    <tr>
      <th>16</th>
      <td colspan="8"></td>
      <td class="slotArrival" :class="game.positions.i16" @click="handleClick('i16')"></td>
      <td colspan="8"></td>
      <th>16</th>
    </tr>
    <tr>
      <th>15</th>
      <td class="slot" :class="game.positions.a15" @click="handleClick('a15')"></td>
      <td class="slot" :class="game.positions.b15" @click="handleClick('b15')"></td>
      <td class="slot" :class="game.positions.c15" @click="handleClick('c15')"></td>
      <td class="slot" :class="game.positions.d15" @click="handleClick('d15')"></td>
      <td class="slot" :class="game.positions.e15" @click="handleClick('e15')"></td>
      <td class="slot" :class="game.positions.f15" @click="handleClick('f15')"></td>
      <td class="slot" :class="game.positions.g15" @click="handleClick('g15')"></td>
      <td class="slot" :class="game.positions.h15" @click="handleClick('h15')"></td>
      <td class="slotBaricade" :class="game.positions.i15" @click="handleClick('i15')"></td>
      <td class="slot" :class="game.positions.j15" @click="handleClick('j15')"></td>
      <td class="slot" :class="game.positions.k15" @click="handleClick('k15')"></td>
      <td class="slot" :class="game.positions.l15" @click="handleClick('l15')"></td>
      <td class="slot" :class="game.positions.m15" @click="handleClick('m15')"></td>
      <td class="slot" :class="game.positions.n15" @click="handleClick('n15')"></td>
      <td class="slot" :class="game.positions.o15" @click="handleClick('o15')"></td>
      <td class="slot" :class="game.positions.p15" @click="handleClick('p15')"></td>
      <td class="slot" :class="game.positions.q15" @click="handleClick('q15')"></td>
      <th>15</th>
    </tr>
    <tr>
      <th>14</th>
      <td class="slot" :class="game.positions.a14" @click="handleClick('a14')"></td>
      <td colspan="15"></td>
      <td class="slot" :class="game.positions.q14" @click="handleClick('q14')"></td>
      <th>14</th>
    </tr>
    <tr>
      <th>13</th>
      <td class="slot" :class="game.positions.a13" @click="handleClick('a13')"></td>
      <td class="slot" :class="game.positions.b13" @click="handleClick('b13')"></td>
      <td class="slot" :class="game.positions.c13" @click="handleClick('c13')"></td>
      <td class="slot" :class="game.positions.d13" @click="handleClick('d13')"></td>
      <td class="slot" :class="game.positions.e13" @click="handleClick('e13')"></td>
      <td class="slot" :class="game.positions.f13" @click="handleClick('f13')"></td>
      <td class="slot" :class="game.positions.g13" @click="handleClick('g13')"></td>
      <td class="slot" :class="game.positions.h13" @click="handleClick('h13')"></td>
      <td class="slotBaricade" :class="game.positions.i13" @click="handleClick('i13')"></td>
      <td class="slot" :class="game.positions.j13" @click="handleClick('j13')"></td>
      <td class="slot" :class="game.positions.k13" @click="handleClick('k13')"></td>
      <td class="slot" :class="game.positions.l13" @click="handleClick('l13')"></td>
      <td class="slot" :class="game.positions.m13" @click="handleClick('m13')"></td>
      <td class="slot" :class="game.positions.n13" @click="handleClick('n13')"></td>
      <td class="slot" :class="game.positions.o13" @click="handleClick('o13')"></td>
      <td class="slot" :class="game.positions.p13" @click="handleClick('p13')"></td>
      <td class="slot" :class="game.positions.q13" @click="handleClick('q13')"></td>
      <th>13</th>
    </tr>
    <tr>
      <th>12</th>
      <td colspan="8"></td>
      <td class="slotBaricade" :class="game.positions.i12" @click="handleClick('i12')"></td>
      <td colspan="8"></td>
      <th>12</th>
    </tr>
    <tr>
      <th>11</th>
      <td colspan="6"></td>
      <td class="slot" :class="game.positions.g11" @click="handleClick('g11')"></td>
      <td class="slot" :class="game.positions.h11" @click="handleClick('h11')"></td>
      <td class="slotBaricade" :class="game.positions.i11" @click="handleClick('i11')"></td>
      <td class="slot" :class="game.positions.j11" @click="handleClick('j11')"></td>
      <td class="slot" :class="game.positions.k11" @click="handleClick('k11')"></td>
      <td colspan="6"></td>
      <th>11</th>
    </tr>
    <tr>
      <th>10</th>
      <td colspan="6"></td>
      <td class="slot" :class="game.positions.g10" @click="handleClick('g10')"></td>
      <td colspan="3"></td>
      <td class="slot" :class="game.positions.k10" @click="handleClick('k10')"></td>
      <td colspan="6"></td>
      <th>10</th>
    </tr>
    <tr>
      <th>9</th>
      <td colspan="4"></td>
      <td class="slot" :class="game.positions.e9" @click="handleClick('e9')"></td>
      <td class="slot" :class="game.positions.f9" @click="handleClick('f9')"></td>
      <td class="slotBaricade" :class="game.positions.g9" @click="handleClick('g9')"></td>
      <td class="slot" :class="game.positions.h9" @click="handleClick('h9')"></td>
      <td class="slot" :class="game.positions.i9" @click="handleClick('i9')"></td>
      <td class="slot" :class="game.positions.j9" @click="handleClick('j9')"></td>
      <td class="slotBaricade" :class="game.positions.k9" @click="handleClick('k9')"></td>
      <td class="slot" :class="game.positions.l9" @click="handleClick('l9')"></td>
      <td class="slot" :class="game.positions.m9" @click="handleClick('m9')"></td>
      <td colspan="4"></td>
      <th>9</th>
    </tr>
    <tr>
      <th>8</th>
      <td colspan="4"></td>
      <td class="slot" :class="game.positions.e8" @click="handleClick('e8')"></td>
      <td colspan="7"></td>
      <td class="slot" :class="game.positions.m8" @click="handleClick('m8')"></td>
      <td colspan="4"></td>
      <th>8</th>
    </tr>
    <tr>
      <th>7</th>
      <td colspan="2"></td>
      <td class="slot" :class="game.positions.c7" @click="handleClick('c7')"></td>
      <td class="slot" :class="game.positions.d7" @click="handleClick('d7')"></td>
      <td class="slot" :class="game.positions.e7" @click="handleClick('e7')"></td>
      <td class="slot" :class="game.positions.f7" @click="handleClick('f7')"></td>
      <td class="slot" :class="game.positions.g7" @click="handleClick('g7')"></td>
      <td class="slot" :class="game.positions.h7" @click="handleClick('h7')"></td>
      <td class="slot" :class="game.positions.i7" @click="handleClick('i7')"></td>
      <td class="slot" :class="game.positions.j7" @click="handleClick('j7')"></td>
      <td class="slot" :class="game.positions.k7" @click="handleClick('k7')"></td>
      <td class="slot" :class="game.positions.l7" @click="handleClick('l7')"></td>
      <td class="slot" :class="game.positions.m7" @click="handleClick('m7')"></td>
      <td class="slot" :class="game.positions.n7" @click="handleClick('n7')"></td>
      <td class="slot" :class="game.positions.o7" @click="handleClick('o7')"></td>
      <td colspan="2"></td>
      <th>7</th>
    </tr>
    <tr>
      <th>6</th>
      <td colspan="2"></td>
      <td class="slot" :class="game.positions.c6" @click="handleClick('c6')"></td>
      <td colspan="11"></td>
      <td class="slot" :class="game.positions.o6" @click="handleClick('o6')"></td>
      <td colspan="2"></td>
      <th>6</th>
    </tr>
    <tr>
      <th>5</th>
      <td class="slotBaricade" :class="game.positions.a5" @click="handleClick('a5')"></td>
      <td class="slot" :class="game.positions.b5" @click="handleClick('b5')"></td>
      <td class="slot" :class="game.positions.c5" @click="handleClick('c5')"></td>
      <td class="slot" :class="game.positions.d5" @click="handleClick('d5')"></td>
      <td class="slotBaricade" :class="game.positions.e5" @click="handleClick('e5')"></td>
      <td class="slot" :class="game.positions.f5" @click="handleClick('f5')"></td>
      <td class="slot" :class="game.positions.g5" @click="handleClick('g5')"></td>
      <td class="slot" :class="game.positions.h5" @click="handleClick('h5')"></td>
      <td class="slotBaricade" :class="game.positions.i5" @click="handleClick('i5')"></td>
      <td class="slot" :class="game.positions.j5" @click="handleClick('j5')"></td>
      <td class="slot" :class="game.positions.k5" @click="handleClick('k5')"></td>
      <td class="slot" :class="game.positions.l5" @click="handleClick('l5')"></td>
      <td class="slotBaricade" :class="game.positions.m5" @click="handleClick('m5')"></td>
      <td class="slot" :class="game.positions.n5" @click="handleClick('n5')"></td>
      <td class="slot" :class="game.positions.o5" @click="handleClick('o5')"></td>
      <td class="slot" :class="game.positions.p5" @click="handleClick('p5')"></td>
      <td class="slotBaricade" :class="game.positions.q5" @click="handleClick('q5')"></td>
      <th>5</th>
    </tr>
    <tr>
      <th>4</th>
      <td class="slot" :class="game.positions.a4" @click="handleClick('a4')"></td>
      <td colspan="3"></td>
      <td class="slot" :class="game.positions.e4" @click="handleClick('e4')"></td>
      <td colspan="3"></td>
      <td class="slot" :class="game.positions.i4" @click="handleClick('i4')"></td>
      <td colspan="3"></td>
      <td class="slot" :class="game.positions.m4" @click="handleClick('m4')"></td>
      <td colspan="3"></td>
      <td class="slot" :class="game.positions.q4" @click="handleClick('q4')"></td>
      <th>4</th>
    </tr>
    <tr>
      <th>3</th>
      <td class="slot" :class="game.positions.a3" @click="handleClick('a3')"></td>
      <td class="slot" :class="game.positions.b3" @click="handleClick('b3')"></td>
      <td class="slot" :class="game.positions.c3" @click="handleClick('c3')"></td>
      <td class="slot" :class="game.positions.d3" @click="handleClick('d3')"></td>
      <td class="slot" :class="game.positions.e3" @click="handleClick('e3')"></td>
      <td class="slot" :class="game.positions.f3" @click="handleClick('f3')"></td>
      <td class="slot" :class="game.positions.g3" @click="handleClick('g3')"></td>
      <td class="slot" :class="game.positions.h3" @click="handleClick('h3')"></td>
      <td class="slot" :class="game.positions.i3" @click="handleClick('i3')"></td>
      <td class="slot" :class="game.positions.j3" @click="handleClick('j3')"></td>
      <td class="slot" :class="game.positions.k3" @click="handleClick('k3')"></td>
      <td class="slot" :class="game.positions.l3" @click="handleClick('l3')"></td>
      <td class="slot" :class="game.positions.m3" @click="handleClick('m3')"></td>
      <td class="slot" :class="game.positions.n3" @click="handleClick('n3')"></td>
      <td class="slot" :class="game.positions.o3" @click="handleClick('o3')"></td>
      <td class="slot" :class="game.positions.p3" @click="handleClick('p3')"></td>
      <td class="slot" :class="game.positions.q3" @click="handleClick('q3')"></td>
      <th>3</th>
    </tr>
    <tr>
      <th>2</th>
      <td></td>
      <td class="slotRed" :class="game.positions.b2" @click="handleClick('b2')"></td>
      <td class="slotRed" :class="game.positions.c2" @click="handleClick('c2')"></td>
      <td class="slotRed" :class="game.positions.d2" @click="handleClick('d2')"></td>
      <td></td>
      <td class="slotGreen" :class="game.positions.f2" @click="handleClick('f2')"></td>
      <td class="slotGreen" :class="game.positions.g2" @click="handleClick('g2')"></td>
      <td class="slotGreen" :class="game.positions.h2" @click="handleClick('h2')"></td>
      <td></td>
      <td class="slotYellow" :class="game.positions.j2" @click="handleClick('j2')"></td>
      <td class="slotYellow" :class="game.positions.k2" @click="handleClick('k2')"></td>
      <td class="slotYellow" :class="game.positions.l2" @click="handleClick('l2')"></td>
      <td></td>
      <td class="slotBlue" :class="game.positions.n2" @click="handleClick('n2')"></td>
      <td class="slotBlue" :class="game.positions.o2" @click="handleClick('o2')"></td>
      <td class="slotBlue" :class="game.positions.p2" @click="handleClick('p2')"></td>
      <td></td>
      <th>2</th>
    </tr>
    <tr>
      <th>1</th>
      <td></td>
      <td class="slotRed" :class="game.positions.b1" @click="handleClick('b1')"></td>
      <td></td>
      <td class="slotRed" :class="game.positions.d1" @click="handleClick('d1')"></td>
      <td></td>
      <td class="slotGreen" :class="game.positions.f1" @click="handleClick('f1')"></td>
      <td></td>
      <td class="slotGreen" :class="game.positions.h1" @click="handleClick('h1')"></td>
      <td></td>
      <td class="slotYellow" :class="game.positions.j1" @click="handleClick('j1')"></td>
      <td></td>
      <td class="slotYellow" :class="game.positions.l1" @click="handleClick('l1')"></td>
      <td></td>
      <td class="slotBlue" :class="game.positions.n1" @click="handleClick('n1')"></td>
      <td></td>
      <td class="slotBlue" :class="game.positions.p1" @click="handleClick('p1')"></td>
      <td></td>
      <th>1</th>
    </tr>
    <tr>
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>F</th>
      <th>G</th>
      <th>H</th>
      <th>I</th>
      <th>J</th>
      <th>K</th>
      <th>L</th>
      <th>M</th>
      <th>N</th>
      <th>O</th>
      <th>P</th>
      <th>Q</th>
      <th></th>
    </tr>
    <tr>
      <td colspan="2"></td>
      <template v-for="p in game.players">
      <td colspan="3" :class="{ currentPlayer: p === username }">{{ p }}</td>
      <td></td>
      </template>
      <td colspan="2"></td>
    </tr>
  </table>
</div>
</template>

<script>

const initMove = {
  from: null,
  to: null,
  baricade: null,
}

let socket = null

export default {
  middleware: 'auth',
  computed: {
    username() {
      return this.$store.state.auth.username
    },
    gameID() {
      return this.$route.params.id
    },
  },
  data() {
    return {
      game: null,
      currentStep: 6,
      error: null,
      steps: [
        'Roll the dice',
        'Rolling the dice...',
        'Select a pawn to move',
        'Select a slot to place your pawn',
        'Select a slot to place the baricade',
        'Processing the move...',
        'It is the other player\'s turn',
        'Waiting for other players to join...',
        'Game is finished, congrats to the winner!',
      ],
      move: { ...initMove },
    }
  },
  async fetch() {
    let resp
    try {
      resp = await this.$axios.$get('/game/' + this.gameID)
    } catch (err) {
      if (err.response !== undefined && err.response.status === 403) {
        return
      }

      throw err
    }

    this.updateState(resp)

    if (process.client) {
      this.subscribeToUpdates()
    }
  },
  mounted() {
    /* it means we did the fetch server side */
    if (this.game !== null) {
      this.subscribeToUpdates()
    }
  },
  methods: {
    subscribeToUpdates() {
      socket = new WebSocket(this.$config.websocketBaseURL + '/game/' + this.gameID + '/updates')

        socket.addEventListener('open', (e) => {
          console.log('websocket connected')
          socket.send(JSON.stringify({
            username: this.username,
            token: this.$store.state.auth.token,
            game_id: this.gameID,
          }))
        })
      socket.addEventListener('message', (e) => this.updateState(JSON.parse(e.data)))
    },
    updateState(game) {
      this.game = game

      let currentPlayer = -1

      switch (this.game.state) {
        case 'RED_PLAYING':
          currentPlayer = 0
          break
        case 'GREEN_PLAYING':
          currentPlayer = 1
          break
        case 'YELLOW_PLAYING':
          currentPlayer = 2
          break
        case 'BLUE_PLAYING':
          currentPlayer = 3
          break
        case 'WAITING_FOR_PLAYERS':
          this.currentStep = 7
          return
        case 'RED_WON':
        case 'GREEN_WON':
        case 'YELLOW_WON':
        case 'BLUE_WON':
          this.currentStep = 8
          return
      }

      if (currentPlayer !== -1) {
        if (this.game.players[currentPlayer] === this.username) {
          if (this.game.dice === 0) {
            this.currentStep = 0
            this.playNotificationSound()
          } else {
            this.currentStep = 2
          }
        } else {
          this.currentStep = 6
        }
      }
    },
    async joinGame() {
      if (this.game !== null) {
        return
      }

      const resp = await this.$axios.$post('/game/' + this.gameID + '/join')

      this.$fetch()
    },
    async startGame() {
      try {
        await this.$axios.$post('/game/' + this.gameID + '/start')
      } catch (err) {
        if (err.response.status === 400) {
          this.error = err.response.data.error
          return
        }

        throw err
      }
    },
    playNotificationSound() {
      /* TODO see if we can play on reload */
      if (process.client) {
        console.log('play audio')
        const audio = new Audio('/notify.mp3')
        audio.play()
      }
    },
    handleClick(position) {
      switch (this.currentStep) {
        case 2:
          this.selectPawn(position)
          break
        case 3:
          this.selectPawnDestination(position)
          break
        case 4:
          this.selectBaricadeDestination(position)
          break
      }
    },
    async rollTheDice() {
      this.currentStep++
      const resp = await this.$axios.$post('/game/' + this.gameID + '/roll_dice')
    },
    selectPawn(position) {
      this.error = ''
      this.move.from = position
      this.currentStep++
    },
    selectPawnDestination(position) {
      this.move.to = position

      this.currentStep++

      if (this.game.positions[position] !== 'baricade') {
        this.sendMoveToServer()
      }
    },
    selectBaricadeDestination(position) {
      this.move.baricade = position
      this.sendMoveToServer()
    },
    async sendMoveToServer() {
      this.currentStep = 5

      let resp
      try {
        resp = await this.$axios.$post('/game/' + this.gameID + '/move', this.move)
      } catch (err) {
        if (err.response.status === 400) {
          this.error = err.response.data.error
          this.currentStep = 2
          return
        }
        throw err
      }

      this.move = { ...initMove }
    },
  },
}
</script>

<style>
table {
  width: 100%;
  height: 100%;
  background-color: grey;
}
td {
  text-align: center;
  border-radius: 50%;
  padding: 1em;
}
td.slotArrival {
  border: thick solid white;
  background-color: white;
}
td.slot{
  border: thick solid black;
  background-color: black;
}
td.slotBaricade {
  border: thick solid purple;
  background-color: purple;
}
td.slotRed {
  border: thick solid purple;
  background-color: purple;
}
td.slotGreen {
  border: thick solid purple;
  background-color: purple;
}
td.slotYellow {
  border: thick solid purple;
  background-color: purple;
}
td.slotBlue {
  border: thick solid purple;
  background-color: purple;
}
td.red {
  background-color: red;
}
td.green {
  background-color: green;
}
td.yellow {
  background-color: yellow;
}
td.blue {
  background-color: blue;
}
td.baricade {
  background-color: white;
}
td.currentPlayer {
  color: red;
  font-weight: bold;
}
.error {
  color: red;
}
table {
  max-width: 950px;
  margin: 0 auto;
}
div.panel_left {
  float: left;
}
</style>
