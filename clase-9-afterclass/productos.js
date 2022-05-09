class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
        const prod = this.productos.find(prod => prod.id == id)
        return prod || { error: 'producto no encontrado' }
    }

    listarAll() {
        return [...this.productos]
    }

    guardar(prod) {
        const newProd = { ...prod, id: ++this.id }
        this.productos.push(newProd)
        return newProd
    }

    actualizar(prod, id) {
        const newProd = { id: Number(id), ...prod }
        const index = this.productos.findIndex(p => p.id == id)
        if (index !== -1) {
            this.productos[index] = newProd
            return newProd
        } else {
            return { error: 'producto no encontrado' }
        }
    }

    borrar(id) {
        const index = this.productos.findIndex(prod => prod.id == id)
        if (index !== -1) {
            return this.productos.splice(index, 1)
        } else {
            return { error: 'producto no encontrado' }
        }
    }
}

export default ProductosApi
