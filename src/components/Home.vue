<template>
  <div class="app flex flex--column show-on-mobile height--full width-full flex--wrap">
    <today :city="city" :weather-info="weather[0]" :temperature="formatWeather(formatRound(weather[0].the_temp))" @fetchNew="fetchNew" :date="formatDate(weather[0].applicable_date)" />
    <div class="flex flex--align-center width--full flex--column">
      <div class="flex flex--row flex--justify-end width--full  margin--top--40 margin--right--26">
        <btn round :color="activeBtn('celsius')" class="text--bold margin--right--12" :class="btnTextClass('celsius')" @click="weatherUnity('celsius')" label="ºC" />
        <btn round :color="activeBtn('fahrenheit')" class="text--bold margin--right--26" :class="btnTextClass('fahrenheit')" @click="weatherUnity('fahrenheit')" label="ºF" />
      </div>
      <div class="flex  margin--top--40 flex--wrap">
        <card v-for="(item, index) in getWeatherCards" :key="index" color="#1E213A" class="flex flex--align-center flex--column app__card">
          <template #header>
            <div class="text--white">{{ formatDate(item.applicable_date) }}</div>
          </template>
          <template #body>
            <img class="app__card-image"  :src="`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`" />
          </template>
          <template #footer>
            <div class="flex">
              <div class="text--white app__card-label">{{ formatWeather(formatRound(item.min_temp)) }}</div>
              <div class="text--gray">{{ formatWeather(formatRound(item.max_temp)) }}</div>
            </div>
          </template>
        </card>
      </div>
      <div class="flex flex--column width--full margin--top--40">
        <div class="flex flex--row width--full flex--wrap">
          <card color="#1E213A" class="flex flex--align-center margin--left--26 flex--column app__card--bottom">
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

        <div class="flex flex--row width--full flex--wrap margin--top--40">
          <card color="#1E213A" class="flex flex--align-center margin--left--26 flex--column app__card--bottom">
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
  </div>


  <div class="app flex flex--row show-on-desktop height--full">
    <today class="" :city="city" :weather-info="weather[0]" :temperature="formatWeather(formatRound(weather[0].the_temp))" @fetchNew="fetchNew" :date="formatDate(weather[0].applicable_date)" />
    <div class="flex flex--align-center width--full flex--column">
      <div class="flex flex--row flex--justify-end width--full  margin--top--40 margin--right--26">
        <btn round :color="activeBtn('celsius')" class="text--bold margin--right--12" :class="btnTextClass('celsius')" @click="weatherUnity('celsius')" label="ºC" />
        <btn round :color="activeBtn('fahrenheit')" class="text--bold margin--right--26" :class="btnTextClass('fahrenheit')" @click="weatherUnity('fahrenheit')" label="ºF" />
      </div>
      <div class="flex  margin--top--40">
        <card v-for="(item, index) in getWeatherCards" :key="index" color="#1E213A" class="flex flex--align-center flex--column app__card">
          <template #header>
            <div class="text--white">{{ formatDate(item.applicable_date) }}</div>
          </template>
          <template #body>
            <img class="app__card-image"  :src="`https://www.metaweather.com/static/img/weather/${item.weather_state_abbr}.svg`" />
          </template>
          <template #footer>
            <div class="flex">
              <div class="text--white app__card-label">{{ formatWeather(formatRound(item.min_temp)) }}</div>
              <div class="text--gray">{{ formatWeather(formatRound(item.max_temp)) }}</div>
            </div>
          </template>
        </card>
      </div>
      <div class="flex flex--column width--full  margin--top--40">
        <div class="flex flex--row width--full">
          <card color="#1E213A" class="flex flex--align-center margin--left--26 flex--column app__card--bottom">
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

        <div class="flex flex--row width--full margin--top--40">
          <card color="#1E213A" class="flex flex--align-center margin--left--26 flex--column app__card--bottom">
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
  </div>
</template>

<script>
import Card from './Card.vue'
import Btn from './Btn.vue'
import ProgressBar from './ProgressBar.vue'
import Today from './Today.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    Btn,
    ProgressBar,
    Today
  },

  data () {
    return {
      unityType: 'celsius'
    }
  },

  computed: {
    ...mapGetters(['weather', 'location', 'city']),

    getWeatherCards () {
      return this.weather.splice(1, 5)
    },
  },

  created () {
    this.fetchWeather('455827')
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
      let dataFormatada = weeks[data.getUTCDay()] + ", " + ((data.getDate() + 1 )) + " " + months[(data.getMonth())]
      return data.getDate() === currentDate.getDate() ? 'Tomorrow' : dataFormatada
    },

    selectCity (woeid) {
      return this.fetchWeather(woeid)
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
      return this.unityType === 'fahrenheit' ? `${this.celsiusToFahrenheit(weather)} ºF` : `${weather} ºC`
    },

    celsiusToFahrenheit (celsius) {
      return (celsius * 9/5) + 32
    },

    btnTextClass (unit) {
      return this.unityType === unit ? 'text--navy' : 'text--white'
    },

    activeBtn (unit) {
      return this.unityType === unit ? '#E7E7EB' : '#585676'
    },

    fetchNew (woeid) {
      console.log(woeid)
      return this.fetchWeather(woeid)
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

@media (min-width: 761px) {
  .show-on-mobile { display: none !important; }
}
@media (max-width: 760px) {
  .show-on-desktop { display: none !important; }
}
</style>
