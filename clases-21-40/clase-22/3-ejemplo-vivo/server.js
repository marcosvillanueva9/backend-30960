const { normalize, denormalize, schema } = require('normalizr');

/* -------------------------------------- */
// OBJETO DE PRUEBA
/* -------------------------------------- */
const originalData = {
    id: "999",
    posts: [
        {
            id: "123",
            author: {
                id: "1",
                nombre: "Pablo",
                apellido: "Perez",
                DNI: "20442654",
                direccion: "CABA 123",
                telefono: "1567876547"
            },
            title: "My awesome blog post",
            comments: [
                {
                id: "324",
                commenter: {
                    id: "2",
                    nombre: "Nicole",
                    apellido: "Gonzalez",
                    DNI: "20442638",
                    direccion: "CABA 456",
                    telefono: "1567811543"
                }
                },
                {
                id: "325",
                commenter: {
                    id: "3",
                    nombre: "Pedro",
                    apellido: "Mei",
                    DNI: "20446938",
                    direccion: "CABA 789",
                    telefono: "1567291542"
                }
                }
            ]
        },
        {
        id: "1123",
        author: {
            id: "2",
            nombre: "Nicole",
            apellido: "Gonzalez",
            DNI: "20442638",
            direccion: "CABA 456",
            telefono: "1567811543"
        },
        title: "My awesome blog post",
        comments: [
            {
            id: "1324",
            commenter: {
                id: "1",
                nombre: "Pablo",
                apellido: "Perez",
                DNI: "20442654",
                direccion: "CABA 123",
                telefono: "1567876547"
            }
            },
            {
            id: "1325",
            commenter: {
                id: "3",
                nombre: "Pedro",
                apellido: "Mei",
                DNI: "20446938",
                direccion: "CABA 789",
                telefono: "1567291542"
            }
            }
        ]
        },
        {
        id: "2123",
        author: {
            id: "3",
            nombre: "Pedro",
            apellido: "Mei",
            DNI: "20446938",
            direccion: "CABA 789",
            telefono: "1567291542"
        },
        title: "My awesome blog post",
        comments: [
            {
            id: "2324",
            commenter: {
                id: "2",
                nombre: "Nicole",
                apellido: "Gonzalez",
                DNI: "20442638",
                direccion: "CABA 456",
                telefono: "1567811543"
            }
            },
            {
            id: "2325",
            commenter: {
                id: "1",
                nombre: "Pablo",
                apellido: "Perez",
                DNI: "20442654",
                direccion: "CABA 123",
                telefono: "1567876547"
            }
            }
        ]
        }
    ]
}

/* -------------------------------------- */
// Definicion de schemas
/* -------------------------------------- */

const user = new schema.Entity('users');

const comment = new schema.Entity('comments', {
    commenter: user
})

const post = new schema.Entity('posts', {
    author: user,
    comments: [comment]
})

const blog = new schema.Entity('blog', {
    posts: [post]
})

/* -------------------------------------- */
// Normalizacion
/* -------------------------------------- */

const util = require('util');

function print(obj) {
    console.log(util.inspect(obj, false, 12, true));
}

console.log('Objeto original')
print(originalData)
console.log(JSON.stringify(originalData).length)

console.log('Normalizacion')
const normalizedData = normalize(originalData, blog);
print(normalizedData)
console.log(JSON.stringify(normalizedData).length)

// Porcentaje de reduccion
console.log('Porcentaje de reduccion')
console.log(100 - ((JSON.stringify(normalizedData).length * 100) / JSON.stringify(originalData).length))


/* -------------------------------------- */
// Denormalizacion
/* -------------------------------------- */

const denormalizedData = denormalize(normalizedData.result, blog, normalizedData.entities);
console.log('Denormalizacion')
print(denormalizedData)
console.log(JSON.stringify(denormalizedData).length)