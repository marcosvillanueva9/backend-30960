import got from 'got'

let url = 'http://localhost:8080'

got(url, { responseType: 'json'})
    .then(response => {
        let fyh = response.body
        console.log(fyh)
    })
    .catch(error => {
        console.log(error)
    })