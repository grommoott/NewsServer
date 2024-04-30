import net from "net"

const port = 7777
const host = "localhost"

let sockets = []

const server = net.createServer()

server.listen(port, host, () => {
    console.log("Sever started")
})

server.on("connection", (socket) => {
    sockets.push(socket)

    socket.on("data", (data) => {
        sockets.forEach((s) => s.write(data))
    })
})