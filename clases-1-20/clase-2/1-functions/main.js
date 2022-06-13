// Solo una funcion
function foo1(a, b) {
    resultadoSuma = a + b
    return resultadoSuma
}

//Imprimimos la funcion
console.log(foo1)
console.log(foo1(3, 2))

// Una funcion anonima guardada en una variable
let foo2 = function(a, b) {
    return a + b
}

//Imprimimos la funcion
console.log(foo2)
console.log(foo2(3, 2));

function foo3(a,b) {
    return function() {
        return a + b
    }()
}

console.log(foo3)
console.log(foo3(1, 3));

(function() {
    console.log('Soy una funcion anonima')
})();