<template>
   <div class="today">
       olaaaaaaaaaaaa
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
.today {
    background: #1E213A;
    width: 460px;
}
</style>
