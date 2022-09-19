export type Uuid = string;

export interface Producto {
  id: Uuid;
  nombre: string;
  descripcion: string;
  precio: number;
}
