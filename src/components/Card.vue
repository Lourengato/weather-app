<template>
  <div :style="backgroundColor" class="card width--full">
    <div class="width--full">
      <div class="margin--bottom--10"> 
        <slot name="header"/>
      </div>
      <div class="margin--bottom--30">
        <slot name="body"/>
      </div>
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
}
</style>
