const socket = io.connect();

socket.on('clave2', data => {
    //document.querySelector('p').innerHTML += data
    alert(data)
    socket.emit('clave3', 'el mensaje lo recibi correctamente, saludos del cliente')
}) 