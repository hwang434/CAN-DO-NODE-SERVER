const { json } = require('body-parser');

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log("user connect");
  // 좋아요 누른 사람

  
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

server.listen(8080, function(){
  console.log("server on 8080");
  //
  var ip = require("ip");
  console.dir ( ip.address() ); 
});