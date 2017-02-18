var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('views'));

app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs');

app.listen(port, function(error) {
	console.log('Running on port 5000');
});
