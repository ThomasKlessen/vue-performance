<template>
  <div>
    <label>Header</label>
    <button v-on:click="clickMe"> + </button>
    <button v-on:click="toggleShowInfo">Toolge ShowInfo</button>
    <label>{{ calcItems }}</label>
    <h2>{{ dummyText }}</h2>
    <button v-on:click="jop">Jop</button>
    <button v-on:click="nope">Nope</button>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  computed: {
    calcItems () {
      return this.$store.getters.getCalcItems
    },
    dummyText () {
      return this.$store.getters.getDummyText
    }
  },
  methods: {
    clickMe () {
      console.log('Click')
      this.$store.commit('addOne')
    },
    toggleShowInfo () {
      console.log('toggleShowInfo')
      this.$store.commit('toggleShowInfo')
    },
    jop () {
      console.log('Jop')
      this.$store.commit('setDummyText', 'Jop')
    },
    nope () {
      console.log('Nope')
      this.$store.commit('setDummyText', 'Nope')
    }
  }
}
</script>

<style>
  button {
    height: 50px;
    width: 100px;
  }
</style>
