function getProductosDestacados(id) {
    //const prodDestacados = getProductosDestacadosFromDB(id)
    const prodDestacados = []
    return prodDestacados
}


function testGetProductosDestacadosOk() {
    const id = 3 // id de una persona que si tiene productos destacados
    const resultado = getProductosDestacados(id)
    if (resultado === []) {
        console.log('Test getProductosDestacados FAIL')
    } else {
        console.log('Test getProductosDestacados OK')
    }
}

function testGetProductosDestacadosEmpty() {
    const id = 4 // id de una persona que si tiene productos destacados
    const resultado = getProductosDestacados(id)
    if (resultado === []) {
        console.log('Test getProductosDestacados OK')
    } else {
        console.log('Test getProductosDestacados FAIL')
    }
}