<template>
  <div>
    <h1>ListRendering</h1>
    <ul>
      <item
        v-for="item in items"
        :item="item"
        :key="item.id"
      ></item>
    </ul>
  </div>
</template>

<script>
import Item from './item'

export default {
  components: {
    Item
  },
  name: 'ListRendering',
  computed: {
    items () {
      return this.$store.getters.getItems
    }
  },
  beforeCreate () {
    console.time('init_all')
  },
  mounted () {
    console.timeEnd('init_all')
  }
}
</script>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
</style>
