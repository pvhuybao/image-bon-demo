import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vue2TouchEvents)

new Vue({
  render: h => h(App),
}).$mount('#app')
