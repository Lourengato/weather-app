<template>
    <div class="progress-bar">
        <div class="flex flex--row width--full flex--justify-between">
            <div>0</div>
            <div>50</div>
            <div>100</div>
        </div>
        <div class="background--gray progress-bar__bar">
            <div :style="`width: ${progress}%`" class="progress-bar__bar progress-bar__progress"/>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number
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
.progress-bar {
    &__bar {
        height: 8px;
    }

    &__progress {
        background-color: #FFEC65;
    }
}
</style>
