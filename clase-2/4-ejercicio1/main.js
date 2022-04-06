function mostrarLista(arr) {
    if (arr == null) {
        console.log('Objeto nulo')
        return
    }
    if (arr.length == 0) {
        console.log('Lista vacia')
        return
    }
    
    console.log(arr)
    return
}

// Caso nulo
mostrarLista(null);
// Caso vacio
mostrarLista([]);
// Caso Correcto
mostrarLista(['Tomates', 'Lechuga', 'Cebolla']);

console.log('\n'); // Explicar por que las ;;;

(function(arr) {
    if (arr == null) {
        console.log('Objeto nulo')
        return
    }
    if (arr.length == 0) {
        console.log('Lista vacia')
        return
    }
    
    console.log(arr)
    return
})([1,2,3]);

console.log('\n');

function crearMultiplicador(num) {
    return function(num2) {
        console.log(num * num2)
    }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

duplicar(4)
triplicar(4)