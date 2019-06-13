var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/* var logger = function(req, res, next){
    console.log('Logging...');
    next();
}

app.use(logger); */

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

var users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@gmail.com'
    },
    {
        first_name: 'Sean',
        last_name: 'Smith',
        email: 'seansmith@gmail.com'
    },
    {
        first_name: 'Steven',
        last_name: 'Jackson',
        email: 'stevenjackson@gmail.com'
    }
]

app.get('/', function(req, res){
    res.render('index', {
        title: 'Customers',
        users: users
    });
});

app.listen(3000, function(){
    console.log('Server Started on Port 3000...');
})