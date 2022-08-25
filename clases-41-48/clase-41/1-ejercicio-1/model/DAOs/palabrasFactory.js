import PalabrasMemDAO from "./palabrasMem.js";

class PalabrasFactoryDAO {
    static get() {
        return new PalabrasMemDAO()
    }
}

export default PalabrasFactoryDAO