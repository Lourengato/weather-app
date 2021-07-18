<template>
  <h1>Home!!</h1>
  {{ weather }}
</template>

<script>
// import vue from 'vue';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters(['weather'])
  },

  created () {
    this.getWeather
  },

  methods: {
    ...mapActions(['getWeather'])
  }
}
</script>