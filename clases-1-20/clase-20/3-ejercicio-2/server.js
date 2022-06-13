import admin from 'firebase-admin';
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync('./db/ecommerce-8b58b-firebase-adminsdk-iz4q0-73f452ff4a.json'));

admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});

console.log("Conectado a firebase correctamente")

const db = admin.firestore();
const query = db.collection("colores");
//1
const red = await query.add({nombre: "red"})
const green = await query.add({nombre: "green"})
const blue = await query.add({nombre: "blue"})
console.log("Colores creados")
//2
const todosloscolores = await query.get()
todosloscolores.forEach(doc =>
    console.log(doc.data())
)
console.log("Colores recuperados")
//3
await query.doc(blue.id).update({nombre: "navy"})
console.log("Color blue actualizado")
//4
await query.doc(green.id).delete()
console.log("Color green eliminado")