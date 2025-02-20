import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

const token = localStorage.getItem('guru-user-token')
var search_filters = localStorage.getItem('search_filters')
var syg_user_type = localStorage.getItem('syg_user_type')
if (token) {
  // Vue.prototype.$http.defaults.headers.common['Authorization'] = token
  store.state.isAuthenticated = true
}

if (syg_user_type) {
  store.state.user.user_type = syg_user_type
}

if (search_filters) {
  store.state.search_filters = JSON.parse(search_filters)
}

new Vue({
  router,
  template: '',
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   if (to.name) {
//     app.$store.commit('setLoading', true)
//   }
//   next()
// })

// router.afterEach(() => {
//   app.$store.commit('setLoading', false)
// })
