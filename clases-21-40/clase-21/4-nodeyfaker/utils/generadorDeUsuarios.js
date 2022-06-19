import { faker } from '@faker-js/faker';
faker.locale = 'es';

function generarUsuario() {
    return {
        nombre: faker.name.firstName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        imagen: faker.image.cats(),
    }
}

export { generarUsuario };