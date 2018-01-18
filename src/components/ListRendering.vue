<template>
  <div>
    <main-header></main-header>
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
import Item from './Item'
import MainHeader from './MainHeader'

export default {
  components: {
    MainHeader,
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
