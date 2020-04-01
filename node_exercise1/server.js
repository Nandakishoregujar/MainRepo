const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended:true}));

// passing database
const db = require('./mondb.js');
const route = require('./insert.js')
app.use('/',route)
app.listen(9000, () => console.log(`port running on 3000`))
