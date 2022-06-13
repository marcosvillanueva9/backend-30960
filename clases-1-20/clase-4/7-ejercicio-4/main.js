const fs = require('fs')

fs.promises.readFile('./info.txt', 'utf-8')
  .then(contenido => {
    console.log('info.json: lectura exitosa')

    const info = JSON.parse(contenido)
    console.log(info)

    const packageJsonObj = info.contenidoObj

    packageJsonObj.author = 'Coderhouse'

    fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonObj, null, 2))
      .then(() => console.log('package.json.coder: escritura exitosa'))
      .catch(error => {
        console.log(`Error en escritura: ${error}`)
      })
  })
  .catch(error => console.log(`Error en lectura: ${error}`))
