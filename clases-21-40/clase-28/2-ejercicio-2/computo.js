const calculo = () => {
    let sum = 0
    for (let i = 0; i < 6e9; i++) {
        sum += i
    }
    return sum
}

process.on('exit', () => {
    console.log(`worker #${process.pid} cerrado`)
})

process.on('message', msg => {
    console.log(`worker #${process.pid} iniciando su tarea`)
    const sum = calculo()
    process.send(sum)
    console.log(`worker #${process.pid} finalizó su trabajo`)
    process.exit()
})

process.send('listo')