<template>
  <div id="app">
    <fader v-show="showFader"></fader>
    <router-view/>
  </div>
</template>

<script>
import Fader from './components/Fader.vue'

export default {
  components: {
    Fader
  },
  name: 'PerformanceTest',
  computed: {
    showFader () {
      return this.$store.getters.getShowFader
    }
  }
}
</script>

<style>
  html,
  body,
  #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
