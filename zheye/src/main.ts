import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'

axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  store.commit('setError', { status: false, messgae: '' })
  return config
})
axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 1000)
  return config
}, e => {
  const { error } = e.response.data
  store.commit('setError', { status: true, message: error })
  store.commit('setLoading', false)
  return Promise.reject(error)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
