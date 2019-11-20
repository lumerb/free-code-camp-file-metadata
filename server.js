const express = require('express');
const app = express();
const routes = require('./routes.js');
const formidable = require('formidable');

routes(app);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.listen(3000, () => console.log("App Listening on Port 3000"));