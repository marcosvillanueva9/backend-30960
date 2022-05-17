// const getNum0to255 = () => Math.floor(Math.random() * 256)

// class Color {
//     get() {
//         let color = `rgb(${getNum0to255()}, ${getNum0to255()}, ${getNum0to255()})`
//         return color
//     }
// }

// const color = new Color()
// console.log(color.get())

const getNum0a255 = ():number => Math.floor(Math.random() * 255)

class Color2 {
    get():string {
        let color:string = `rgb(${getNum0a255()}, ${getNum0a255()}, ${getNum0a255()})`
        return color
    }
}

const color2:Color2 = new Color2
console.log(color2.get())