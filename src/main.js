import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navigation from './components/Navigation.vue'

Vue.config.productionTip = false

Vue.component('navigation', Navigation);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
