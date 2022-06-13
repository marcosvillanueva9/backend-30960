export class Perimetro {
    cuadrado(lado:number):number {
        return 4*lado
    }

    rectangulo(base:number, altura:number):number {
        return 2*base + 2*altura
    }

    circulo(radio:number): number {
        return 2*Math.PI*radio
    }
}