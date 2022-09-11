const express = require('express');
const socketIO = require('socket.io');
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log("user connect");
  // 좋아요 누른 사람
  var ip = require("ip");
  console.dir ( ip.address() ); 
  
  socket.on("like", function(data) {
    // 좋아요 받을 사람 tt2rf
  
    console.log("Server received Data.");
    io.emit("like", data);
    // io.to("room").emit("like", data);
  });
  socket.on("disconnect", (socket) => {
    console.log("user discconect");
  });
});