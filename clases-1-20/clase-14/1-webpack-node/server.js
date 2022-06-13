// npm init -y
// npm install webpack webpack-cli
// "build": "webpack ./server.js",              <-- package.json
// --mode=production  ||  --mode=development    <-- package.json

const lista1 = [2,3,5,7]

lista1.map(x => {
    return x*x
}).forEach(x => console.log(x))