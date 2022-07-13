const modo = process.env.MODO ?? 'prod'
const puerto = process.env.PORT ?? 0
const debug = process.env.DEBUG == 'true' ? true : false

console.log({
    modo,
    puerto,
    debug
})