require('dotenv').config()
const express = require('express');
const app = express();
const route = require('./routes');
const db = require('./configdb');
const cors = require('cors')


db.connect();
app.use(cors())
app.use(express.json())
route(app);

app.listen(5000);