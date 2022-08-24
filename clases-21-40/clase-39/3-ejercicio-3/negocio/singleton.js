export default class PrimeraConexion {
    static instancia

    constructor() {
        if (!PrimeraConexion.instancia) {
            this.hora = new Date().toLocaleString();
            PrimeraConexion.instancia = this;
        } else {
            return PrimeraConexion.instancia;
        }
    }

    obtenerHora() {
        return this.hora;
    }
}