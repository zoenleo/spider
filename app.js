const express = require('express');
const path = require('path');
const api = require('./api');
require('./server');

const app = express();

app.use('/', express.static(path.join(__dirname, '/view')));

app.use('/api', api);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`start app listening on port ${PORT}!`);
});
