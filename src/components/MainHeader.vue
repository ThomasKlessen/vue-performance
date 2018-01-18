<template>
  <div>
    <button v-on:click="addOne"> Add 1 to all </button>
    <button v-on:click="toggleShowCounter"> Toolge all counter </button>
    <label>{{ calcItems }}</label>
    <br>
    <h2>Clicked: {{ clicks }}</h2>
    <button v-on:click="click">Simple click event</button>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  computed: {
    calcItems () {
      return this.$store.getters.getCalcItems
    },
    clicks () {
      return this.$store.getters.getClicks
    }
  },
  methods: {
    addOne () {
      console.log('Click')
      this.$store.commit('addOne')
    },
    toggleShowCounter () {
      console.log('toggleShowCounter')
      this.$store.commit('toggleShowCounter')
    },
    click () {
      console.log('Clicked')
      this.$store.commit('addClick')
    }
  }
}
</script>

<style>
  button {
    height: 30px;
  }
</style>
