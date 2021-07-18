import axios from 'axios'

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/'

const state = {
  weather: {},
  location: []
}

const getters = {
  weather: state => state.weather,
  location: state => state.location
}

const actions = {
  async fetchWeather ({ commit }, id) {
    if (localStorage.consolidated_weather) {
      commit('setWeather', localStorage.consolidated_weather)
      this.name = localStorage.consolidated_weather
    } else {
      const response = await axios.get(`api/location/${id}/`)
      commit('setWeather', response.data.consolidated_weather)
      localStorage.consolidated_weather = response.data.consolidated_weather
    }
  },

  async fetchLocation ({ commit }, query) {
    const response = await axios.get(`/api/location/search/?query=${query}`)
    commit('setLocation', response.data)
},
}

const mutations = {
  setWeather (state, data) {
    state.weather = data
  },

  setLocation (state, data) {
    state.location = data
  }
}

export default {
  namespaced: false,
  getters,
  mutations,
  actions,
  state
}