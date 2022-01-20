import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import VueToastr from '@deveodk/vue-toastr'
import VueTheMask from 'vue-the-mask'
import Vuex from 'vuex'
import PortalVue from 'portal-vue'

Vue.use(PortalVue)
Vue.use(Vuex)
Vue.use(VueTheMask)

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
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
