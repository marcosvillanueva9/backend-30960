import * as operaciones from "./lib/operaciones"

const mensaje:string = "Hola typescript"

console.log(mensaje)

let num1:number = 10
let num2:number = 4

console.log(`La suma de ${num1} mas ${num2} es de ${operaciones.sumar(num1, num2)}`)
console.log(`La resta de ${num1} menos ${num2} es de ${operaciones.restar(num1, num2)}`)
console.log(`La multipliacion de ${num1} por ${num2} es de ${operaciones.mult(num1, num2)}`)
console.log(`La division de ${num1} dividido ${num2} es de ${operaciones.div(num1, num2)}`)