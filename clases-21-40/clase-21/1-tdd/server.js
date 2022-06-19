class Calculadora {
    static sumar(a,b) {
        return a+b;
    }
}

function testSuma() {
    const resultado = Calculadora.sumar(3,5)
    if (resultado === 8) {
        console.log('Test suma OK')
    } else {
        console.log('Test suma FAIL')
    }
}

testSuma();