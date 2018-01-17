<template>
  <div class="item">
    <h3>{{ item.name }}</h3>
    <label>{{ getDetails }}</label>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    getDetails () {
      return this.$store.getters.itemDetailsbyItemId(this.item.id).label
    }
  }
}
</script>

<style>
  .item {
    border: 1px solid rgba(0,0,0,0.3)
  }
</style>
