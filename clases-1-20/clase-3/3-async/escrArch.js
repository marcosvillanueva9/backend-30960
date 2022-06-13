function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

var ourFunc = async function(texto, logger) {
    const fs = require('fs')
    let espera = await resolveAfter2Seconds()
    fs.writeFile('./file.txt', texto, err => {
        if (err) {
            logger(err)
            return
        }
    })
    logger('Se imprimio correctamente')
};

module.exports = ourFunc