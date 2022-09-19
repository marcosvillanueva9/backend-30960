import { serve, ServerRequest } from "https://deno.land/std@0.100.0/http/server.ts";

const PORT = 8080

const server = serve({
    port: PORT
})

console.log("http://localhost:" + PORT)

function handleRequest(req: ServerRequest) {
    const query = req.url.replace(/\//g, "")
    const params = new URLSearchParams(query)
    let frase = params.get("frase")
    if (frase) {
        frase = decodeURIComponent(frase)
    }

    const fraseAlReves = frase?.split(" ").reverse().join(" ")

    req.respond({
        status: 200,
        headers: new Headers({ "content-type": "text/html; charset=utf-8"}),
        body: fraseAlReves
    })
}

for await (const req of server) {
    handleRequest(req)
}