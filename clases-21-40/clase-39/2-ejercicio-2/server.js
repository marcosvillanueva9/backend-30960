import express from 'express';
import handlebars from 'express-handlebars';

import * as controlador from './controllers/personas.js'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', handlebars.engine({ extname: '.hbs', defaultLayout: 'index.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */

app.get('/html-onwire', controlador.getHTMLOnwire)
app.post('/html-onwire', controlador.postHTMLOnwire)

/* -------------------------------------- */
/*             DATA ON WIRE               */
/* -------------------------------------- */

app.get('/data-onwire', controlador.getDataOnwire)
app.post('/data-onwire', controlador.postDataOnwire)
app.get('/data-json', controlador.getJSON)

/* -------------------------------------- */

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

server.on('error', (err) => {
    console.log(err);
})
