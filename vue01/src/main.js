import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
console.log(123123)
console.log(2222333123)
console.log('蒙蒙')
console.log("heihei123")
console.log('耗子尾汁')
console.log("小伙子你不讲武德")
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
