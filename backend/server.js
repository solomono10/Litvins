const session = require('express-session')
const express = require('express');
const cors = require('cors');
const config = require('config')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const MongoStore = require('connect-mongo')(session);

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false})
const PORT = config.get('port') || 4000
const host = '123.45.678.901'


app.use(bodyParser.json());
app.use(express.json({extended: true}));
app.use(session({
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        url: config.get('mongoUrl')
    }),
    cookie: { maxAge: 300000 , secure:true },
    secret: 'foo',
    resave: false,
    saveUninitialized: true
}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use('/', cors({origin: 'http://localhost:3000'}), require('./routes/home.routes'));
app.use('/team', cors({origin: 'http://localhost:3000'}), require('./routes/team.routes'));
app.use('/list-matches', cors({origin: 'http://localhost:3000'}), require('./routes/listMatches.routes'));
app.use('/club', cors({origin: 'http://localhost:3000'}), require('./routes/club.routes'));
app.use('/list-news', cors({origin: 'http://localhost:3000'}), require('./routes/listNews.routes'));
app.use('/contact', cors({origin: 'http://localhost:3000'}), require('./routes/contact.routes'));
app.use('/auth', urlencodedParser, cors({origin: 'http://localhost:3000'}), require('./routes/auth.router'));
app.use('/register', urlencodedParser, cors({origin: 'http://localhost:3000'}), require('./routes/registration.router'));


if (process.env.NOdE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}
async function start(){
    try {
        await mongoose.connect(config.get('mongoUrl'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`server is listing on ${PORT}`) )
    }catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}
start()

//const http = require('http');
// const requestHandler = (req, res) => {};
// const server = http.createServer(requestHandler);
// server.listen(port, (err) => {});
