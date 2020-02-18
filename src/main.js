import Vue from 'vue'
import App from './App.vue'
import { video } from "./api/api";
Vue.config.productionTip = false

Vue.prototype.$api = video
new Vue({
  render: h => h(App)
}).$mount('#app')
