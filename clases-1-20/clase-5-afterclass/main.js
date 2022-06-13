// Una manera de resolver el ID autoincremental para el metodo save()
save(obj)
const objs = this.getAll()
// []
let newId
if (objs.length == 0) {
    newId = 1
} else {
    newId = objs[objs.length - 1].id + 1
}

const newObj = { ...obj, id: newId}
objs.push(newObj)

fs.writeFile(this.ruta, JSON.stringify(objs), null, 2)

// 

getById(idProducto) {
    fs.readFile(this.archivo, 'utf-8', (err, data) =>{
       if (err) {
           console.log("error al leer el archivo" + err)
       } else {
           console.log("lectura exitosa" + data);
           let jsonData = JSON.parse(data)
           let seleccionado = jsonData.find((item) => item.id === idProducto)
           console.log(seleccionado)
       }
   })
}

// ----

deleteAll() {
    fs.writeFile(this.ruta, JSON.stringify([]), null, 2)
}

//

function save(name, price, thumbnail){
   
    const objs = await this.getAll()

    
    console.log(objs)
    let newId = 1

    if (objs.length > 0) {
        newId = objs[objs.length - 1].id + 1
    }

    const newObj = {id: newId, name: name, price: price, thumbnail: thumbnail}
    objs.push(newObj)

    fs.writeFile(this.archivo, JSON.stringify(objs), (err) => {
        if (err) {
            console.log("error al crear el archivo", err);
        }else {
            console.log("success");
        }
    })
    
}

//

async getAll() {
    try {
        const arrayProductos = await fs.readFile(this.archivo, `utf-8`)
        return JSON.parse(arrayProductos)
    }
    catch (err) {
        console.log(err)
        return []
    }
}