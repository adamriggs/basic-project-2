'use strict';

var express = require('express');
var compression = require('compression');
var path = require('path');

var app = express();

var staticPath = path.join(__dirname, './public');

app.enable('trust proxy');

app.use(compression());

app.route('/').get(function(req, res) {
    res.header('Cache-Control', 'max-age=60, must-revalidate, private');
    res.sendFile('index.html', {
        root: staticPath
    });
});

app.use('/', express.static(staticPath, {
    maxage: 31557600
}));


// var PythonShell = require('python-shell');

// var options = {
//   mode: 'text',
//   pythonPath: '/bin/',
//   pythonOptions: ['-u'],
//   scriptPath: path.join(__dirname, './public'),
//   args: ['value1', 'value2', 'value3']
// };
 
// PythonShell.run('test.py', options, function (err, results) {
// 	console.log("*****python");
//   if (err) throw err;
//   // results is an array consisting of messages collected during execution 
//   console.log('results: %j', results);
// });

var server = app.listen(process.env.PORT || 5000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port);

});

console.log(process.env.ENV_VARIABLE);
