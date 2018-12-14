const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
// const PORT = 4000;
const { SERVER_PORT } = process.env;
const { CONNECTION_STRING } = process.env;
const ctrl = require('./controller.js')

const app = express();
app.use(bodyParser.json());

massive(CONNECTION_STRING).then(connection => {
    console.log(connection)
    app.set('db', connection);
})

// console.log(SERVER_PORT)
app.listen(SERVER_PORT, () => {
    console.log('Started server on port', SERVER_PORT);
});