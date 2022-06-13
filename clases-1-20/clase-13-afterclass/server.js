const form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()

    const data = {title: form[0].value, price: form[1].value, thumbnail: form[2].value}
    //console.log(data)

    fetch('/api/productos/guardar', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(respuesta => respuesta.json())
    .then( productos => {
        //console.log(productos)
        //document.getElementById('datos').innerHTML = data2Table(productos)
        form.reset()
        socket.emit('update', 'ok');         
    })
    .catch(error => console.error(error))
})

function data2TableHBS(productos,cb) {
    
    fetch('plantillas/tabla.hbs')
    .then(respuesta => respuesta.text())
    .then( plantilla => {
        console.log('------- plantilla --------')
        console.log(plantilla)

        console.log('---------- html ----------')
        var template = Handlebars.compile(plantilla);
        let html = template({ productos })
        console.log(html)

        cb(html)
    })
}