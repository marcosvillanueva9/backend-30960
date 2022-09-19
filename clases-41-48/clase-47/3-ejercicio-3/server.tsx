// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp, ServerRequest } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp()

app.handle("/", handleRequest)

async function handleRequest(req: ServerRequest) {
    const query = req.url.replace(/\//g, "")
    const params = new URLSearchParams(query)
    let frase = params.get("frase")
    if (frase) {
        frase = decodeURIComponent(frase)
    }

    const fraseAlReves = frase?.split(" ").reverse().join(" ")

    await req.respond({
        status: 200,
        headers: new Headers({ "content-type": "text/html; charset=utf-8"}),
        body: fraseAlReves,
    })
}

app.listen({port: 8080})