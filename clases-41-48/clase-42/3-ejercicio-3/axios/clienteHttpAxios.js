import axios from 'axios'

const url = 'http://localhost:8080/ingreso'

const enviarNumero = () => {
    axios.post(url, { numero: Math.random()})
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

setInterval(enviarNumero, 2000)
enviarNumero()