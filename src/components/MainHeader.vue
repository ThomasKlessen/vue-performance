<template>
  <div>
    <label>Header</label>
    <button v-on:click="clickMe"> + </button>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  methods: {
    clickMe () {
      console.log('Click')
      this.$store.commit('addOne')
    }
  }
}
</script>
