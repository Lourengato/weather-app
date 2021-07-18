<template>
  <div class="app flex flex--row  height--full">
    <today class="" />
    <div class="flex flex--justify-center flex--column">
      <div class="flex flex--row flex--justify-end">
        <btn round :color="activeBtn('celsius')" class="text--bold margin--right--12" :class="btnTextClass('celsius')" @click="weatherUnity('celsius')" label="ºC" />
        <btn round :color="activeBtn('fahrenheit')" class="text--bold" :class="btnTextClass('fahrenheit')" @click="weatherUnity('fahrenheit')" label="ºF" />
      </div>
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
              <div class="text--white app__card-label">{{ formatWeather(formatRound(item.min_temp)) }}º</div>
              <div class="text--gray">{{ formatWeather(formatRound(item.max_temp)) }}º</div>
            </div>
          </template>
        </card>
      </div>
      <div class="flex flex--column">
        <div class="flex flex--row width--full">
          <card color="#1E213A" class="flex flex--align-center flex--column app__card--bottom">
            <template #header>
              <div class="text--white">Wind status</div>
            </template>
            <template #body>
              <div class="text--white">{{ formatRound(weather[0].wind_speed) }} mph</div>
            </template>
            <template #footer>
              <div class="flex">
                <img :style="windDirection(weather[0].wind_direction)" src="../assets/navigation.svg">
                <div class="text--white">
                  wsw
                </div>
              </div>
            </template>
          </card>

          <card color="#1E213A" class="flex flex--align-center flex--column app__card--bottom">
            <template #header>
              <div class="text--white">Humidity</div>
            </template>
            <template #body>
              <div class="text--white">{{ formatRound(weather[0].humidity) }}%</div>
            </template>
            <template #footer>
              <progress-bar class="width--full" :progress="formatRound(weather[0].humidity)" />
            </template>
          </card>
        </div>

        <div class="flex flex--row width--full">
          <card color="#1E213A" class="flex flex--align-center flex--column app__card--bottom">
            <template #header>
              <div class="text--white">Visibility</div>
            </template>
            <template #body>
              <div class="text--white">{{ formatRound(weather[0].visibility) }} miles</div>
            </template>
          </card>

          <card color="#1E213A" class="flex flex--align-center flex--column app__card--bottom">
            <template #header>
              <div class="text--white">Air Pressure</div>
            </template>
            <template #body>
              <div class="text--white">{{ formatRound(weather[0].air_pressure) }} mb</div>
            </template>
          </card>
        </div>

        
      </div>
    </div>
    <div>
      <city-select v-for="(city, index) in location" @click="selectCity(city.woeid)" :title="city.title" :key="index" />
    </div>
    <div>
      <btn color="#585676" class="text--bold text--white" @click="getLocation" label="Seach for places" />
      <search-city v-model="search" />
      <btn color="#3C47E9" class="text--bold text--white" @click="getLocation" label="Seach" />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import Btn from './Btn.vue'
import CitySelect from './CitySelect.vue'
import SearchCity from './SearchCity.vue'
import ProgressBar from './ProgressBar.vue'
import Today from './Today.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    Btn,
    CitySelect,
    SearchCity,
    ProgressBar,
    Today
  },

  data () {
    return {
      unityType: 'celsius',
      search: ''
    }
  },

  computed: {
    ...mapGetters(['weather', 'location']),
  },

  created () {
    this.fetchWeather('44418')
  },

  methods: {
    ...mapActions([
      'fetchWeather',
      'fetchLocation'
    ]),

    formatDate (date) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"]
      const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      var data = new Date(date)
      var currentDate = new Date()
      let dataFormatada = ((data.getDate() + 1 )) + ", " + weeks[data.getUTCDay()] + " " + months[(data.getMonth())]
      return data.getDate() === currentDate.getDate() ? 'Tomorrow' : dataFormatada
    },

    selectCity (woeid) {
      return this.fetchWeather(woeid)
    },

    getLocation () {
      return this.fetchLocation(this.search)
    },

    formatRound (item) {
      return Math.round(item)
    },

    windDirection (weather) {
      return `transform: rotate(${weather}deg);`
    },

    weatherUnity (unit) {
      this.unityType = unit
      return this.unityType
    },

    formatWeather (weather) {
      return this.unityType === 'fahrenheit' ? this.celsiusToFahrenheit(weather) : weather
    },

    celsiusToFahrenheit (celsius) {
      return (celsius * 9/5) + 32
    },

    btnTextClass (unit) {
      return this.unityType === unit ? 'text--navy' : 'text--white'
    },

    activeBtn (unit) {
      return this.unityType === unit ? '#E7E7EB' : '#585676'
    }
  }
}
</script>

<style lang="scss">
.app {
  &__card-image {
    width: 56.44px;
  }

  &__card-label {
    margin-right: 16px;
  }

  &__card {
    min-width: 120px;
    margin-right: 26px;

    &--bottom {
      padding-left: 20px;
      padding-right: 20px;
      margin-right: 26px;
    }
  }
}
</style>
