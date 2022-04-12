// ------------------------------------------------------------------------------------//
// Promise 1

let division = (val1, val2) => {
    return new Promise((resolve, reject) => {
        if (val2 == 0) {
            reject('No se puede dividir por 0')
        } else {
            resolve(val1 / val2)
        }
    })
}

division(4,4)
    .then(message => {
        //console.log(message)
    }).catch(error => {
        console.log(error)
    })

// ------------------------------------------------------------------------------------//
// Promise 2.0

let multiplicacionEnCadena = (val1, val2) => {
    return new Promise((resolve, reject) => {
        resolve(val1 * val2)
    })
    .then(result => {
        console.log(result)
        return result * val2
    })
    .then(result => {
        console.log(result)
        return result * val2
    })
    .then(result => {
        console.log(result)
    })
}

multiplicacionEnCadena(2,2)

// ------------------------------------------------------------------------------------//
// Ejercicios

// EJ1
Promise.resolve(20)
    .then(x => x+1)
    .then(x => x*2)
    .then(x => {
        if (x==22) throw 'Error'
        else return 80
    })
    .then( x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log);

// EJ2
Promise.resolve(10)
    .then(x => x+1)
    .then(x => x*2)
    .then(x => {
        if (x==22) throw 'Error'
        else return 80
    })
    .then( x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log);

// EJ3
Promise.resolve(30)
    .then(x => x+1)
    .then(x => x*2)
    .then(x => {
        if (x==22) throw 'Error'
        else return 80
    })
    .then( x => 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log)