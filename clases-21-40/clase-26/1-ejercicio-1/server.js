const express = require('express')
const { engine: exphbs } = require('express-handlebars')
const session = require('express-session')
//--------------------------------------//
// PASSPORT
const passport = require('passport')
const { Strategy: TwitterStrategy } = require('passport-twitter')

const API_KEY = 'wcvcyVGIr0C1XwstEovMIC2Hd'
const API_KEY_SECRET = 'ry8L5FioUXgPZcvjjjRS57Q64X237S717AhHVScKqPWw2xuCSZ'

passport.use(new TwitterStrategy({
    consumerKey: API_KEY,
    consumerSecret: API_KEY_SECRET,
    callbackURL: '/auth/twitter/callback',
}, (token, tokenSecret, userProfile, done) => {
    console.log(userProfile)
    done(null, userProfile)
}))

passport.serializeUser((user, cb) => {
    cb(null, user)
})

passport.deserializeUser((obj, cb) => {
    cb(null, obj)
})

//--------------------------------------//

const app = express()

app.use(
    session({
        secret: "shhhhhhhhhhhh",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000
        }
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//--------------------------------------//

app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    } else {
        res.redirect('/login')
    }
})

//--------------------------------------//

app.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect('/datos')
    }

    res.sendFile(__dirname + '/public/login.html')
})

app.get('/auth/twitter', passport.authenticate('twitter'))

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/faillogin',
}))

app.get('/faillogin', (req, res) => {
    res.render('login-error', {})
})

//--------------------------------------//

app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
        if (!req.user.contador) req.user.contador = 0
        req.user.contador++
        res.render('datos', {
            nombre: req.user.displayName,
            username: req.user.username,
            foto: req.user.photos[0].value,
            contador: req.user.contador,
        })
    } else {
        res.redirect('/')
    }
})

//--------------------------------------//

app.get('/logout', (req, res) => {
    req.logout(err => {
        res.redirect('/')
    })
})

//--------------------------------------//

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
