import log4js from 'log4js'

log4js.configure({
  appenders: {
    consola: { type: 'console' },
    archivoErrores: { type: 'file', filename: 'errores.log' },
    archivoDebug: { type: 'file', filename: 'debug.log' },
    loggerConsola: {
      type: 'logLevelFilter',
      appender: 'consola',
      level: 'info',
    },
    loggerArchivoErrores: {
      type: 'logLevelFilter',
      appender: 'archivoErrores',
      level: 'error',
    },
    loggerArchivoDebug: {
      type: 'logLevelFilter',
      appender: 'archivoDebug',
      level: 'debug',
    },
  },
  categories: {
    default: {
      appenders: ['loggerConsola'],
      level: 'all',
    },
    prod: {
      appenders: ['loggerArchivoErrores', 'loggerArchivoDebug'],
      level: 'all',
    },
  },
})

let logger = null

if (process.env.NODE_ENV === 'production') {
  logger = log4js.getLogger('prod')
} else {
  logger = log4js.getLogger()
}

export default logger
