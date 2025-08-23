const http = require('http');
const app = require('./app');
const { setupRealtime } = require('./realtime');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);
setupRealtime(server);

server.listen(PORT, () => {
  console.log(`🚕 Server listening on http://localhost:${PORT}`);
});
