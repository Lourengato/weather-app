<template>
   <div class="today text--gray">
       <div v-if="todayTab" class="today__clouds flex flex--column flex--justify-between flex--align-center height--full">
           <btn color="#6E707A" class="text--bold text--white margin--top--40" @click="hideToday()" label="Seach for places" />
           <img class="today__image"  :src="`https://www.metaweather.com/static/img/weather/${weatherInfo.weather_state_abbr}.svg`" />
           <div class="today__temperature text--white">{{ temperature }}<span class="text--gray today__unit-abbreviation">{{ unitAbbreviation }}</span></div>
           <div class="today__weather-info">{{ weatherInfo.weather_state_name }}</div>
           <div class="flex flex--row">
                <div>Today •</div>
                <div>{{ date }}</div>
           </div>
           <div class="flex flex--row margin--bottom--30">
                <img class="today__icon"  src="../assets/location.svg" />
                <div>{{ city }}</div>
           </div>
       </div>
       <div v-else class="flex flex--column today__search" :class="openMenu">
           <btn round color="transparent" class="text--bold margin--right--12 text--white flex flex--align-self-end" @click="hideToday()">
               <img src="../assets/close.svg" />
           </btn>
           <div class="flex flex--row margin--top--40">
                <div class="search-city flex flex--align-center margin--right--12">
                    <img class="search-city__icon margin--left--12" src="../assets/search.svg" />
                    <input v-model="search" class="search-city__input text--white" placeholder="search location">
                </div>
                <btn color="#3C47E9" class="text--bold text--white" @click="getLocation" label="Seach" />
            </div>
           <city-select v-for="(item, index) in location" @click="selectCity(item.woeid)" :title="item.title" class="margin--top--40" :key="index" />
       </div>
   </div>
</template>

<script>
import Btn from './Btn.vue'
import CitySelect from './CitySelect.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    city: {
        type: String
    },

    temperature: {
        type: String
    },

    weatherInfo: {
        type: Object
    },

    date: {
        type: String
    },

    unitAbbreviation: {
        type: String
    }
  },

  components: {
    Btn,
    CitySelect
  },

  data () {
      return {
          todayTab: true,
          search: ''
      }
  },

  computed: {
      ...mapGetters(['weather', 'location', 'city']),

      openMenu () {
          return !this.todayTab ? 'day__close' : 'today__search'
      }
  },

  methods: {
      ...mapActions([
      'fetchLocation',
      'fetchWeather'
    ]),

      hideToday () {
          this.todayTab = !this.todayTab
      },

      getLocation () {
        return this.fetchLocation(this.search)
    },

    selectCity (woeid) {
        this.hideToday()
        return this.$emit('fetchNew', woeid)
    }
  }
}
</script>
<style lang="scss">
.today {
    background-color: #1E213A;

    &__temperature {
        font-size: 144px;
    }

    &__weather-info {
        font-size: 36px;
    }

    &__unit-abbreviation {
        font-size: 50px;
    }

    &__clouds {
        top: 0;
        left: 0px;
        background-image:  url('../assets/cloud.svg'), url('../assets/cloud.svg'),
                            url('../assets/cloud.svg'), url('../assets/cloud.svg');
        background-size: 200px, 120px, 150px, 100px;
        background-repeat: no-repeat;
        background-position-y: 20%, 40%, 50%, 18%;
        background-position-x: -10%, -5%, 110%, 110%;
    }

    &__icon {
        width: 14px;
    }

    &__image {
        width: 200px;
    }

    &__search {
        padding-left: 12px;
        padding-right: 12px;
    }
}

@media (max-width: 761px) {
  .today { width: 100%; height: 810px; }
}

@media (min-width: 760px) {
  .today { width: 500px; }
}

.search-city {
  height: 40px;
  border: 1px solid #E7E7EB;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;

  &__input {
    background: none;
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
  }

  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>
