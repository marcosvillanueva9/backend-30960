function hacerTarea(num, cb) {
    console.log(`Haciendo tarea ${num}`)
    setTimeout(cb, 100)
}

console.log('Iniciando tareas')
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('Fin de tareas')
            })
        })
    })
})

console.log('Otras tareas...')
console.log('Otras tareas...')
console.log('Otras tareas...')
console.log('Otras tareas...')