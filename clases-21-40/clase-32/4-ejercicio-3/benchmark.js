const autocannon = require('autocannon')
const stream = require('stream')

function run(url) {
  const buf = []
  const outputStream = new stream.PassThrough()

  const inst = autocannon({
    url,
    connections: 500,
    duration: 20
  })

  autocannon.track(inst, { outputStream })

  outputStream.on('data', data => buf.push(data))
  inst.on('done', () => {
    process.stdout.write(Buffer.concat(buf))
  })
}

console.log('Running all benchmarks in parallel ...')

run('http://localhost:8080/ramdom-debug')
run('http://localhost:8080/ramdom-nodebug')
