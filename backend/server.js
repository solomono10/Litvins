//const http = require('http');
// const requestHandler = (req, res) => {};
// const server = http.createServer(requestHandler);
// server.listen(port, (err) => {});



const express = require('express');
const app = express();
const port = 4000;

app.use(express.json({extended: true}));

app.use('/team', require('./routes/team.routes'));



app.listen(port, (err)=>{
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listing on ${port}`)
});
