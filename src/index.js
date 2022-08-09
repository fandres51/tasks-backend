const express = require('express');
const routerApi = require('./routes/index.routes');
const {
    logErrors,
    errorHandler,
    boomErrorHandler,
    ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Running on port ' + port);
});
