<template>
    <button :style="backgroundColor" :class="btnClasses" class="btn flex flex--align-center flex--justify-center">
      <slot name="default">{{ label }}</slot>
    </button>
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
.btn {
  border: none;
  height: 40px;

  &--round {
    width: 40px;
    border-radius: 54px;
  }

  &--rectangular {
    padding-left: 18px;
    padding-right: 18px;
  }
}
</style>
