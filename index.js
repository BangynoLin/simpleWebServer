const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.raw());// mime application/octet-stream
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/Images'));
app.use(onUse.bind(this));


function onUse(req, res, next) {

    console.log(req.body);
    let output_obj = {};
    output_obj.MessageCode = 1000;
    output_obj.Message = 'SUCCESS';
    res.end(JSON.stringify(output_obj));
}


// app.listen(3000);

app.listen(5082, _ => {
    console.log(`HTTP Server run on http://127.0.0.1:5082/`);
});