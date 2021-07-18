import axios from 'axios'

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/'

const state = {
  weather: {}
}

const getters = {
  weather: state => state.weather
}

const actions = {
  async fetchWeather ({ commit }, id) {
      const response = await axios.get(`api/location/${id}/`)
      commit('setWeather', response.data.consolidated_weather)
  },
}

const mutations = {
  setWeather (state, data) {
    state.weather = data
  }
}

export default {
  namespaced: false,
  getters,
  mutations,
  actions,
  state
}