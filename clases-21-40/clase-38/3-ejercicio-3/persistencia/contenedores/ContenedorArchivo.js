import { promises as fs } from "fs";

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = ruta;
    }

    async listar(id) {
        const objs = await this.listarAll();
        return objs.find(o => o.id == id);
    }

    async listarAll () {
        try {
            const contenido = await fs.readFile(this.ruta, 'utf8');
            return JSON.parse(contenido);
        } catch (error) {
            return [];
        }
    }

    async guardar(obj) {
        const objs = await this.listarAll();
        obj.id = objs.length + 1;
        objs.push(obj);
        await fs.writeFile(this.ruta, JSON.stringify(objs));
    }
}

export default ContenedorArchivo;