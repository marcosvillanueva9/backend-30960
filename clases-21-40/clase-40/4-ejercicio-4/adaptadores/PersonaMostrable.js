export default class PersonaMostrable {
    persona

    constructor(persona) {
        this.persona = persona
    }

    comoTexto() {
        const lines = []
        lines.push(`id: ${this.persona.id}`);
        lines.push(`nombre: ${this.persona.nombre}`);
        lines.push(`apellido: ${this.persona.apellido}`);
        lines.push(`dni: ${this.persona.dni}`);
        return lines.join('\n')
    }
}