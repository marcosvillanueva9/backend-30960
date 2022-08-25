class PalabrasBaseDAO {

    getNextId(palabras) {
        let length = palabras.length
        return length? parseInt(palabras[length-1]) + 1 : 1
    }
}

export default PalabrasBaseDAO