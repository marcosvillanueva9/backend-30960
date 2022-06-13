const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Multer config */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
const upload = multer({ storage: storage })

// Endpoints

app.post('/subir', upload.single('miArchivo'), (req, res) => {
    const file = req.file
    if (!file) {
        const error = new Error('Error: No se subio ningun archivo')
        error.httpStatuCode = 400
        return next(error)
    }
    res.send('Archivo ' + file.originalname + ' se subio correctamente')
})

// SERVER
const PORT = 8080
const server = app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))