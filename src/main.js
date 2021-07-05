import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  render: h => h(App),
}).$mount('#app')
