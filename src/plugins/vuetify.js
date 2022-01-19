import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        background: colors.indigo.lighten5,
        primary: colors.blue,
        error: colors.red.accent2,
        success: colors.green.darken1,
        accent: colors.blueGrey.darken3,
        default: colors.blue,
      }
    }
  }
}

export default new Vuetify(opts)