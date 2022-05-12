import Vue from 'vue'
import numeral from 'numeral'

Vue.filter('number_format', (val, format = '0,0') => {
  if (Number.isNaN(Number(val))) return '0'
  return numeral(val).format(format)
})
