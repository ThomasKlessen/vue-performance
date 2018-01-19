<template>
  <div class="fader" v-on:click="hideFader">
    <h3>Bitte warten...</h3>
  </div>
</template>

<script>
export default {
  name: 'Fader',
  methods: {
    hideFader () {
      this.$store.commit('setShowFader', false)
    }
  }
}
</script>

<style scoped>
  .fader {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    z-index: 9999;
    color: white;
    text-align: center;
  }
  h3 {
    margin-top: 30%;
  }
</style>
