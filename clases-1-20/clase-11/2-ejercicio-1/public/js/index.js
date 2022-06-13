const socket = io.connect();

const input = document.querySelector('input')
document.querySelector('button').addEventListener('click', () => {
    socket.emit('mensaje', input.value);
});

socket.on('mensajes', msjs => {
    const mensajesHTML = msjs
        .map(msj => `Socket ID: ${msj.socketid} -> ${msj.mensaje}`)
        .join('<br>')
    document.querySelector('p').innerHTML = mensajesHTML
});
