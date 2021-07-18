<template>
  <h1>Home!!</h1>
  {{ weather }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
  },

  data () {
    return {}
  },

  computed: {
    ...mapGetters(['weather'])
  },

  created () {
    this.fetchWeather('44418')
  },

  methods: {
    ...mapActions([
      'fetchWeather'
    ]),
  }
}
</script>