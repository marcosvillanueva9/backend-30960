const socket = io.connect();

function addMessage(e) {
    const message = {
        author: document.getElementById("username").value,
        message: document.getElementById("text").value,
    }

    socket.emit("new-message", message);

    document.getElementById("text").value = ""
    document.getElementById("text").focus()

    return false
}

function render(data) {
    const html = data.map((elem, index) => {
        return(`<div>
        <strong>${elem.author}</strong>
        <em>${elem.message}</em>
        </div>`)
    }).join(" ")

    document.getElementById("messages").innerHTML = html
}

socket.on("messages", function(data) {render(data)})