import axios from 'axios'

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/'

const state = {
  weather: {},
  location: []
}

const getters = {
  // weather: state => JSON.parse(JSON.stringify(state.weather)),
  weather: state => state.weather,
  location: state => state.location,
  city: state => state.city
}

const actions = {
  async fetchWeather ({ commit }, id) {
    // if (localStorage.consolidated_weather && localStorage.city) {
    //   const data = JSON.parse(localStorage.getItem('consolidated_weather'))
    //   const cityData = JSON.parse(localStorage.getItem('city'))
    //   commit('setWeather', data)
    //   commit('setCity', cityData)

    // } else {
    //   const response = await axios.get(`api/location/${id}/`)
    //   const parsed = JSON.stringify(response.data.consolidated_weather)
    //   const cityParsed = JSON.stringify(response.data.parent.title)

    //   commit('setWeather', response.data.consolidated_weather)
    //   commit('setCity', response.data.parent.title)

    //   localStorage.setItem('consolidated_weather', parsed)
    //   localStorage.setItem('city', cityParsed)
    // }

      const response = await axios.get(`api/location/${id}/`)
      // const parsed = JSON.stringify(response.data.consolidated_weather)
      // const cityParsed = JSON.stringify(response.data.parent.title)

      commit('setWeather', response.data.consolidated_weather)
      commit('setCity', response.data.parent.title)

      // localStorage.setItem('consolidated_weather', parsed)
      // localStorage.setItem('city', cityParsed)
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
  },

  setCity (state, data) {
    state.city = data
  }
}

export default {
  namespaced: false,
  getters,
  mutations,
  actions,
  state
}