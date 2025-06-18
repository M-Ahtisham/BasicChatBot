const express = require('express');
const socketio = require('socket.io');
const IntentHandler = require('./intents/intentHandler');

const app = express();
const server = app.listen(3001);
const io = socketio(server);

const intentHandler = new IntentHandler();

// Serve static files from public directory
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('message', (message) => {
    console.log('Received message:', message);
    const response = intentHandler.getResponse(message);
    socket.emit('response', response);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

console.log('Server running on port 3001');
