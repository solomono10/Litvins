const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
const port = 4000;

// app.use(cors({credential: true, origin: 'http://localhost:3000'}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json({extended: true}));

app.use('/', cors({origin: 'http://localhost:3000'}), require('./routes/home.routes'));
app.use('/team' ,cors({origin: 'http://localhost:3000'}), require('./routes/team.routes'));
app.use('/list-matches',cors({origin: 'http://localhost:3000'}), require('./routes/listMatches.routes'));
app.use('/club', require('./routes/club.routes'));


if (process.env.NOdE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listing on ${port}`)
});
process.on('unhandledRejection', function (reason, p) {
    console.log(reason, p);
})





// app.use('/list-news', require('./routes/listNews.routes'));
// app.use('/contact', require('./routes/contact.routes'));


//const http = require('http');
// const requestHandler = (req, res) => {};
// const server = http.createServer(requestHandler);
// server.listen(port, (err) => {});
