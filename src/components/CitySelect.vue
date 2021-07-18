<template>
    <div>
        <div v-for="(city, index) in results" class="city-select flex--align-center flex flex--justify-between" :key="index">
            <div class="">
                {{ city }}
            </div>
            <span class="material-icons">chevron_right</span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array
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
    &:hover {
        border: 1px solid #616475;
    }
}
</style>
