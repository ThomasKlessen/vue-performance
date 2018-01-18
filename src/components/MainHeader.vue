<template>
  <div>
    <label>Header</label>
    <v-btn v-on:click="clickMe"> + </v-btn>
    <v-btn v-on:click="toggleShowInfo">Toggle</v-btn>
    <label>{{ calcItems }}</label>
    <h2>{{ dummyText }}</h2>
    <v-btn v-on:click="jop">Jop</v-btn>
    <v-btn v-on:click="nope">Nope</v-btn>
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
