const moment = require('moment')

const hoy = moment()
const nacimiento = moment('30/05/1988', 'DD/MM/YYYY')

const diffYear = hoy.diff(nacimiento, 'years')
const diffDays = hoy.diff(nacimiento, 'days')

console.log(`Hoy es ${hoy.format('DD/MM/YYYY')}`)
console.log(`Naci el ${nacimiento.format('DD/MM/YYYY')}`)
console.log(`Desde mi nacimiento han pasado ${diffYear} anios`)
console.log(`Desde mi nacimiento han pasado ${diffDays} dias`)
