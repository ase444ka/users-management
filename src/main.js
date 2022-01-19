import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import VueToastr from '@deveodk/vue-toastr'
import Vuex from 'vuex'

Vue.use(Vuex)

import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
import '@/assets/style.scss'

Vue.config.productionTip = false
Vue.use(VueToastr, {
  defaultPosition: 'toast-bottom-left',
  defaultType: 'info',
  defaultTimeout: 4000,
})

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
