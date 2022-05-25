export class Superficie {
    cuadrado(lado:number):number {
        return lado**2
    }

    rectangulo(base:number, altura:number):number {
        return base*altura
    }

    circulo(radio:number): number {
        return Math.PI*radio**2
    }
}