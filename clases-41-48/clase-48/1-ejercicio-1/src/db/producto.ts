import type { Producto, Uuid } from "../types/producto.ts";

const productos: Producto[] = []

//Fake Db Queries
export const findProductoById = (id: Uuid): Producto => {
  const producto: Producto = <Producto>productos.find((producto: Producto) => producto.id == id)
  return producto || {}
}

export const findProductos = (): Producto[] => {
  return productos
}

export const createProducto = (
  nombre: string,
  descripcion: string,
  precio: number
): Producto => {
  const producto: Producto = {
    id: globalThis.crypto.randomUUID(),
    nombre,
    descripcion,
    precio
  }
  productos.push(producto)
  return producto
};

export const updateProducto = (
  id: Uuid,
  nombre: string,
  descripcion: string,
  precio: number
): Producto => {
  const productoActualizar: Producto = { id, nombre, descripcion, precio }
  const index = productos.findIndex((producto: Producto) => producto.id == id)
  productos[ index ] = productoActualizar
  return productoActualizar
};

export const deleteProducto = (
  id: Uuid
): Producto => {
  const index = productos.findIndex((producto: Producto) => producto.id == id)
  const producto: Producto = productos.splice(index, 1)[ 0 ]
  return producto
};
