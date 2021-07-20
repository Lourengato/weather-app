<template>
  <div class="search-city flex flex--align-center">
    <img class="search-city__icon margin--left--12" src="../assets/search.svg" />
    <input v-model="message" class="search-city__input text--white" placeholder="search location">
  </div>
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
  width: 100%;
  margin-bottom: 15px;

  &__input {
    background: none;
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>
