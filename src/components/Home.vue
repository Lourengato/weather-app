<template>
  <div class="app">
    <div class="flex">
      <card v-for="(item, index) in weather" :key="index" color="#1E213A" class="flex flex--align-center flex--column app__card">
        <template #header>
          <div class="text--white">{{formatDate(item.applicable_date)}}</div>
        </template>
        <template #body>
          <img class="app__card-image"  :src="`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`" />
        </template>
        <template #footer>
          <div class="flex">
            <div class="text--white app__card-label">{{ formatTemperature(item.min_temp) }}º</div>
            <div class="text--gray">{{ formatTemperature(item.max_temp) }}º</div>
          </div>
        </template>
      </card>
    </div>
    <div>
      <!-- <btn color="#E7E7EB" label="label aqui" />
      <btn color="#E7E7EB" >
        <template #default>
          agora com template
        </template>
      </btn> -->
    </div>
    <div>
      <!-- <city-select :results="weather" /> -->
    </div>
    <div>
      <!-- <search-city /> -->
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import Btn from './Btn.vue'
import CitySelect from './CitySelect.vue'
import SearchCity from './SearchCity.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    Btn,
    CitySelect,
    SearchCity
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

    formatDate (date) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"]
      const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      var data = new Date(date)
      var currentDate = new Date()
      if (data.getDate() + 1 === currentDate.getDate() || data.getDate() === currentDate.getDate()) {
        return data.getDate() === currentDate.getDate() ? 'Today' : 'Tomorrow'
      }
      let dataFormatada = ((data.getDate() + 1 )) + ", " + weeks[data.getUTCDay()] + " " + months[(data.getMonth())]
      return dataFormatada
    },

    formatTemperature (Temperature) {
      return Math.round(Temperature)
    }
  }
}
</script>

<style lang="scss">
.app {
  &__card-image {
    max-width: 56.44px;
  }

  &__card-label {
    margin-right: 16px;
  }

  &__card {
    margin-right: 26px;
  }
}
</style>
