<template>
  <div class="item">
    <h3>{{ item.name }}</h3>
    <label>{{ detail.label }}</label>
    <br/>
    <label>{{ detail.count }}</label>
    <button v-on:click="add"> + </button>
    <button v-on:click="sub"> - </button>
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
    detail () {
      return this.$store.getters.itemDetailsbyItemId(this.item.id)
    }
  },
  methods: {
    add () {
      this.detail.count++
    },
    sub () {
      this.detail.count--
    }
  }
}
</script>

<style>
  .item {
    border: 1px solid rgba(0,0,0,0.3)
  }
</style>
