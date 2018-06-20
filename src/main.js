import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.devtools = true

new Vue({
  el: '#app',
  render: h => h(App)
})
