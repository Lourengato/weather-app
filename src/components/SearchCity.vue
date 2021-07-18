<template>
    <input v-model="message" class="search-city" placeholder="search location">
</template>

<script>
export default {
  props: {
    color: {
      type: String
    },

    label: {
      type: String
    },

    round: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    backgroundColor () {
      return `background-color: ${this.color};`
    },

    btnClasses () {
      return this.round ? 'btn--round' : 'btn--rectangular'
    }
  }
}
</script>
<style lang="scss">
.search-city {
  height: 40px;
  border: 1px solid #E7E7EB;
  box-sizing: border-box;
}
</style>
