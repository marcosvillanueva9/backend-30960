import { bgWhite, green, red, yellow} from 'https://deno.land/std@0.100.0/fmt/colors.ts'

const numeros = Deno.args.map(num => Number(num))

numeros.sort((a,b) => a-b)

const minimo = numeros[0]
const maximo = numeros[numeros.length - 1]
const promedio = () => {
    let suma = 0
    numeros.forEach(num => suma += num)
    return suma / numeros.length
}

const textos: string[] = []
textos.push("**********************************")
textos.push(`Numeros ${numeros}`)
textos.push(`Minimo ${minimo}`)
textos.push(`Maximo ${maximo}`)
textos.push(`Promedio ${promedio()}`)
textos.push("**********************************")

console.log(textos[0])
console.log(textos[1])
console.log(bgWhite(yellow(textos[2])))
console.log(bgWhite(red(textos[3])))
console.log(bgWhite(green(textos[4])))
console.log(textos[5])

await Deno.writeTextFile("./resultados.dat", textos.join("\n"))

// Deno.test("testPromedio", function(): void {
//     numeros.push(1,2,3)
//     const prom = promedio()
//     console.log(prom)
// })