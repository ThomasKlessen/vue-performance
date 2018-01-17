<template>
  <div>
    <label>Header</label>
    <button v-on:click="clickMe">ClickTest</button>
  </div>
</template>

<script>
export default {
  name: 'main-header',
  methods: {
    clickMe () {
      console.log('Click')
    }
  }
}
</script>
