const express = require('express');
const animalsRouter = require('./routers/animals.router');
const rootPageRouter = require('./routers/rootPage.router');
//for pathfinding on multiple OS
const path = require('path');

const app = express();

//change settings to read 'hbs'(template engine) files and setting path to .hbs files
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const port = 3005;



//middleWare.. code before 'next()' goes up the request chain being processed by server.
app.use((req, res, next) => {
    const timeStart = Date.now();

    next();
    //code after 'next()' goes back to client side down the response chain.
    const deltaTime = Date.now() - timeStart;
    console.log(`${req.method} ${req.baseUrl} ${req.url} time: ${deltaTime}ms`);

});

//serves folder
app.use('/site', express.static(path.join(__dirname, 'public')));

//middleWare parses json data to object 
app.use(express.json());

app.use('/', rootPageRouter);

//routers organizes and keeps code clear when dealing with alot of routes
app.use('/animals', animalsRouter);

app.listen(port, () => {
    console.log(`Server active: http://localhost:${3005}`);
})
