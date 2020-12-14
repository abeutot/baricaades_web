<template>
  <div>
    <h3>{{ title }}</h3>
    <ul v-if="games.length !== 0">
      <li v-for="g in games">
        <NuxtLink :to="'/game/' + g.id + '/'">{{ g.id }}</NuxtLink>
        ({{ g.players_count }} / 4)
        <template v-if="showState">{{ g.state }}</template>
      </li>
    </ul>
    <template v-else>No available games.</template>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    games: {
      type: Array,
      required: true,
    },
    showState: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
