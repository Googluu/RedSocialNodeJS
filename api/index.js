const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');

const {config} = require('../config');
const user = require('./routes/users.router');

const app = express();

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

// Router
app.use('/api/user', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.port, () => {
    console.log('Api escuchando en el puerto ', config.port);
});