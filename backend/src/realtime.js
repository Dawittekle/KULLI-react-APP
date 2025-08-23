const { Server } = require('socket.io');

function setupRealtime(httpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: '*'
    }
  });

  io.on('connection', (socket) => {
    // Client should join rooms like user:<id> to receive personal updates.
    socket.on('join', (room) => {
      socket.join(room);
    });

    socket.on('disconnect', () => {});
  });

  return io;
}

module.exports = { setupRealtime };
