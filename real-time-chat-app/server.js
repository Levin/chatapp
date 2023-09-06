const http = require('http');
let messages = [];
const server = http.createServer((req, res) => {
  console.log("hey the server lives")
});

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log("user connected")
  socket.on('chat message', (msg) => {
    console.log('message sent at ' + new Date() + ' : ' + msg);
    messages.push(msg);
    console.log(messages)
    socket.emit(msg);
  });
});






const port = 3000;
io.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




