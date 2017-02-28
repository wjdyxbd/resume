var express = require('express');
var handlebars = require('express-handlebars')
					.create({defaultlayout : 'main'});

var app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.render('index', {layout: null});
});

app.use(express.static('public'));

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});
