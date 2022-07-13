const parseArgs = require('yargs/yargs')

const yargs = parseArgs(process.argv.slice(2))

const { modo, puerto, debug, _ } = yargs
    .boolean('debug')
    .alias({
        m: 'modo',
        p: 'puerto',
        d: 'debug'
    })
    .default({
        modo: 'produccion',
        puerto: 0,
        debug: false
    })
    .argv

console.log({ modo, puerto, debug, otros: _ })