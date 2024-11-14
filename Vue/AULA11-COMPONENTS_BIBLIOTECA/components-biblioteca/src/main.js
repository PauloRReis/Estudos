import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  render: function (h) { return h(App) },
  vuetify: new Vuetify()
}).$mount('#app')
