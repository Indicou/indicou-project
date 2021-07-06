import Vue from 'vue'
import moment from 'moment'

Vue.directive('money-format', (el, { value }) => {
  el.innerHTML = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2
  }).format(value || 0)
})

Vue.directive('din-format', (el, { value }) => {
  el.innerHTML = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2
  }).format(value || 0)
})

Vue.directive('date-format', (el, { value }) => {
  moment.locale('pt')
  el.innerHTML = moment(value).format('DD/MM/YYYY')
})

Vue.directive('dates-format', (el, { value }) => {
  moment.locale('pt')
  el.innerHTML = moment(value).format('ll')
})

Vue.directive('time-format', (el, { value }) => {
  moment.locale('pt')
  el.innerHTML = moment(value).format('HH:mm')
})
