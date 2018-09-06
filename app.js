const express = require('express');
const path = require('path');
const api = require('./api');

const app = express();

app.use('/', express.static(path.join(__dirname, '/view')));

app.use('/api', api);

app.listen(8080, () => {
    console.log('start app listening on port 8080!');
});