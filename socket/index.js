const io = require('socket.io')(3200,{
    cors:{
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("A user connected");
    io.emit("Welcome", "Hello this is socket Server")
})