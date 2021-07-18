<template>
        <button class="city-select flex--align-center flex flex--justify-between width--full">
            <div class="text--white">
                {{ title }}
            </div>
            <img src="../assets/chevron-right.svg">
        </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.city-select {
    height: 64px;
    border: 1px solid transparent;
    padding-left: 12px;
    padding-right: 12px;
    max-width: 400px;
    background-color: transparent;

    &:hover {
        border: 1px solid #616475;
    }
}
</style>
