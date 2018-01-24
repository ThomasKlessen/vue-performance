<template>
  <div class="subItem">
    <button v-on:click="add"> + </button>
    <span v-on:click="showSmarty">{{ subItem.count }}</span>
    <button v-on:click="sub"> - </button>
  </div>
</template>

<script>
export default {
  name: 'subItem',
  props: {
    subItemId: {
      type: Number,
      required: true
    }
  },
  computed: {
    subItem () {
      return this.$store.getters.getSubItemById(this.subItemId)
    }
  },
  methods: {
    add () {
      this.subItem.count++
    },
    sub () {
      this.subItem.count--
    },
    showSmarty () {
      console.log(this.subItem.id, this.subItem)
    }
  }
}
</script>

<style scoped>
  .subItem {
    width: 30px;
    height: 60px;
    overflow: hidden;
    border: 1px solid grey;
    margin-left: 10px;
  }
  span {
    text-align: center;
    height: 20px;
    width: 100%;
    display: inline-block;
  }
  button {
    height: 20px;
    min-height: 16px;
    width: 100%;
  }
</style>
