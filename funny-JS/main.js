// [] is equal ![]

console.log([] == ![]) // -> true

console.log(true == []) // -> false
console.log(true == ![]) // -> false

console.log(false == []) // -> true
console.log(false == ![]) // -> true

// Minion call

console.log("b" + "a" + +"a" + "a") // -> 'baNaNa'

console.log(NaN === NaN) // -> false

// Object.is() determines if two values have the same value or not. 
// It works similar to the === operator but there are a few weird cases:

console.log(Object.is(NaN, NaN)) // -> true
console.log(NaN === NaN) // -> false

console.log(Object.is(-0, 0)) // -> false
console.log(-0 === 0) // -> true

console.log(Object.is(NaN, 0 / 0)) // -> true
console.log(NaN === 0 / 0) // -> false