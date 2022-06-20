const express = require('express');

const {config} = require('../config');
const user = require('./routes/users.router');

const app = express();

// Router
app.use('/api/user', user);

app.listen(config.port, () => {
    console.log('Api escuchando en el puerto ', config.port);
});