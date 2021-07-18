import { createStore } from 'vuex'

import weather from './weather.js'

export const store = createStore({
  modules: {
    weather
  }
})

export default store