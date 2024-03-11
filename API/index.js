const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { PORT } = process.env;
const routes = require('./src/routes/index.js');
const { swaggerDocs } = require('./src/swagger.js')

const server = express();
server.name = 'API';

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from (prev: http://localhost:3000)
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
server.use(express.json());
server.use('/', routes);

server.listen(PORT, ()=>{
  console.log(`Listen on http://localhost:${PORT}`)
  swaggerDocs(server, PORT)
})