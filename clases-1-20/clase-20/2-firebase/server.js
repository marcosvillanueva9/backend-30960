var admin = require("firebase-admin");

var serviceAccount = require("./db/ecommerce-8b58b-firebase-adminsdk-iz4q0-73f452ff4a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log("Conectado a firebase correctamente")

CrearUsuario();

async function CrearUsuario() {
    const db = admin.firestore();
    const query = db.collection("usuarios");

    try {
        let id = 1;
        let doc = await query.doc(id.toString())
        await doc.create({nombre: "Marcos", apellido: "Villanueva"})

        console.log("Usuario creado")
    } catch (error) {
        console.log(error);
    }
}
