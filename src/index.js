const express = require('express');
const routerApi = require('./routes/index.router');

const app = express();
const port = 3000;

routerApi(app);

app.listen(port, () => {
    console.log('Running in port ' + port);
});

