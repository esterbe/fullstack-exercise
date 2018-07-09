// const express = require('express');
// const path = require('path');
// const config = require('../config');
// const app = express();
// const port = config.server.port;
//
// app.use(express.static(path.resolve(__dirname, './react-ui/build')));
//
// app.get('/api/getComments', (req, res) => {
//     res.send({ express: 'Hello From Express' });
// });
//
// app.get('/api/getComments', (req, res) => {
//     res.send({ express: 'Hello From Express' });
// });
//
// app.get('/api/addComment', (req, res) => {
//     res.send({ express: 'Hello From Express' });
// });
//
//
// app.listen(port, () => console.log('app listening on port 8008!'));

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('../config');

const app = express();
const port = config.server.port;

// allow-cors
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fullstackexercise', function (err, client) {
    if(!err) {
        console.log("We are connected");
    }
    else
        throw err;
});

const apiRoutes = require('./routes')(app, express);
app.use('/api', apiRoutes);
app.get('/', (req,res) => {
    return res.end('Api working');
})

// catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port,() => {
    console.log(`App Server Listening at ${port}`);
});

