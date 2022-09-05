import got from 'got'

const url = 'http://localhost:8080/egreso'

const pedirNumeros = () => {
    got(url, { responseType: 'json' })
        .then(response => {
            let {numeros} = response.body
            console.log(numeros)
        })
        .catch(error => {
            console.log(error)
        })
}

setInterval(pedirNumeros, 10000)
pedirNumeros()