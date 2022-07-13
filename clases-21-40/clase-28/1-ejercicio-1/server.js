    const args = process.argv

    process.on('exit', code => {
        if (code) {
            console.log(`saliendo con codigo ${code}`)
        } else {
            console.log(`saliendo... adios!`)
        }
    })

    process.on('uncaughtException', error => {
        console.log(error)
        switch (error.descripcion) {
            case 'entrada vacia': return process.exit(-4)
            case 'error de tipo': return process.exit(-5)
            default: return process.exit()
        }
    })

    function asegurarArrayNoVacioDeNumeros(nums) {
        if (nums.length == 0) {
            throw {
                descripcion: 'entrada vacia'
            }
        }
        for (const num of nums) {
            const val = Number(num)
            if (isNaN(val)) {
                throw {
                    descripcion: 'error de tipo',
                    numeros: nums,
                    tipos: nums.map(n => isNaN(n) ? typeof n : 'number')
                }
            }
        }
    }

    function avg(nums) {
        let total = 0
        for (const num of nums) {
            const val = Number(num)
            total += val
        }
        return total / nums.length
    }

    const numeros = args.slice(2)
    asegurarArrayNoVacioDeNumeros(numeros)
    const promedio = avg(numeros)
    const max = Math.max(...numeros)
    const min = Math.min(...numeros)
    const ejecutable = process.execPath.split('/').pop()
    const pid = process.pid

    const datos = {
        numeros,
        promedio,
        max,
        min,
        ejecutable,
        pid
    }

    console.log(datos)