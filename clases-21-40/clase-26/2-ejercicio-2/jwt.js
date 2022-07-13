const jwt = require('jsonwebtoken')

const PRIVATE_KEY = 'yendo'

function generateAuthToken(nombre) {
  return jwt.sign({ nombre: nombre}, PRIVATE_KEY, { expiresIn: '60s' })
}

function auth(req, res, next) {

  const authHeader = req.headers["authorization"] || req.headers["Authorization"] || ""
  if (!authHeader) {
    return res.status(401).json({
      error: 'no estas autorizado!',
      detalle: 'te dejo detallado que no estas autorizado!',
    })
  }

  const token = authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({
      error: 'no estas autorizado!',
      detalle: 'te dejo detallado que no estas autorizado!',
    })
  }

  try {
    req.user = jwt.verify(token, PRIVATE_KEY)
  } catch (err) {
    return res.status(403).json({
      error: 'token invalido!',
      detalle: 'te dejo detallado que no estas autorizado!',
    })
  }

  next()
}
module.exports = {
  generateAuthToken,
  auth,
}