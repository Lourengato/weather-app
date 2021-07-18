import axios from 'axios'

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/'

const state = {
    weather: {}
}

const getters = {
    weather: state => state.weather
}

const mutations = {
    setWeather (state, data) {
        state.weather = data
    }
}

const actions = {
    async fetchWeather ({commit}) {
        console.log('aeeeeeeeeeeeeeeeeeeeeee cambada')
        const response = await axios.get('api/location/44418')
        console.log(response)
        commit('setWeather', response.data)
        // axios.get('44418').then(response => {
        //     const weather = response 
        // })
        // commit('setWeather', weather)
    }
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
    actions,
}