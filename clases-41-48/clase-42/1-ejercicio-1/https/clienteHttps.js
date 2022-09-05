import { request } from 'https'
import { writeFile } from 'fs'

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/posts',
    method: 'GET'
}

const req = request(options, res => {
    let response = ''

    res.on('data', d => {
        response += d
    })

    res.on('end', () => {
        const posts = JSON.parse(response)
        const archivo = 'postsHttp.json'
        writeFile(archivo, JSON.stringify(posts, null, '\t'), error => {
            if (error) throw new Error('Error de escritura')
            console.log('OK')
        })
    })
})

req.on('error', error => {
    console.log(error)
})

req.end()