<template>
  <div :style="backgroundColor" class="card">
    <div class="card__upper-section">
      <slot name="header"/>
      <slot name="body"/>
    </div>
    <slot name="footer"/>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    }
  },

  computed: {
    backgroundColor () {
      return `background-color: ${this.color};`
    }
  }
}
</script>
<style lang="scss">
.card {
  padding: 18px;
  width: 100%;

  &__upper-section {
    margin-bottom: 30px;
  }
}
</style>
