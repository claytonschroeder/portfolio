require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8001;
const server = express();

server.use(express.static('assets')); // This is actually a build directory in the parent
server.use(bodyParser.json({limit: '500kb'})); // change the size limit

server.get('/', function (request, response){
  response.send('Hello');
});

server.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});