class ContenedorMemoria {

    constructor() {
        this.objs = [];
    }

    async listar(id) {
        const objs = await this.listarAll();
        return objs.find(o => o.id == id);
    }

    async listarAll () {
        return this.objs;
    }

    async guardar(obj) {
        this.objs.push(obj);
    }
}

export default ContenedorMemoria;