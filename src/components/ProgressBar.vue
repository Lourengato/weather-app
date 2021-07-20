<template>
    <div class="progress-bar">
        <div class="flex flex--row width--full text--gray flex--justify-between">
            <div>0</div>
            <div>50</div>
            <div>100</div>
        </div>
        <div class="background--gray progress-bar__bar margin--top--5">
            <div :style="`width: ${progress}%`" class="progress-bar__bar progress-bar__progress"/>
        </div>
        <div class="margin--top--5 text--gray flex--justify-end flex">%</div>
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
        border-radius: 80px;
    }

    &__progress {
        background-color: #FFEC65;
        border-radius: 80px;
    }
}
</style>
