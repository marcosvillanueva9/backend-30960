import pino from 'pino'

function buildProdLogger() {
  const prodLogger = pino('debug.log')
  prodLogger.level = 'debug'
  return prodLogger
}

function buildDevLogger() {
  const devLogger = pino()
  devLogger.level = 'info'
  return devLogger
}

let logger = null

if (process.env.NODE_ENV === 'production') {
  logger = buildProdLogger()
} else {
  logger = buildDevLogger()
}

export default logger
