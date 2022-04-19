const numeros = {}

function getAleatorios() {
    return parseInt(Math.random() * 20) + 1
}

for (let i = 1; i <= 10000 ; i++) {
    const numero = getAleatorios()
    if (!numeros[numero]) {
        numeros[numero] = 0
    }

    numeros[numero]++
}

console.log(numeros)
