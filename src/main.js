import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/scss/app.scss'
import { auth } from './firebase'
import './utils/directive'
import JwPagination from 'jw-vue-pagination'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMask from 'v-mask'
import JsonCSV from 'vue-json-csv'
import money from 'v-money'
import vueAwesomeCountdown from 'vue-awesome-countdown'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)

Vue.component('downloadCsv', JsonCSV)

Vue.use(money, { precision: 4 })
Vue.use(VueApexCharts)
Vue.use(VueMask)
Vue.use(BootstrapVue)
Vue.use(vueAwesomeCountdown, 'vac')

Vue.component('jw-pagination', JwPagination)

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
