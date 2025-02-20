import Vue from 'vue'
import Vuex from 'vuex'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: { user_type: null },
    isAuthenticated: false,
    search_filters: {
      location_keyword: '',
      category: '',
      experience: null,
      price_per_hour: null,
      qualification: null,
      timing: null,
      gender: null,
      location_preferences: []
    },
    filtered_tutions: []
  },
  getters: {
    is_loggedin: function(state) {
      return state.isAuthenticated
    },
    is_user_tutor: function(state) {
      if (state.user.user_type != null && state.user.user_type == 4) {
        return true
      } else {
        return false
      }
    },
    user_type: function(state) {
      if (state.user.user_type != null) {
        if (state.user.user_type == 4) {
          return 'tutor'
        } else if (state.user.user_type == 3) {
          return 'student'
        }
      } else {
        return 'anonymous'
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loader
  }
})
