// Requiring libraries
const express = require('express');
const path = require('path');
const router = express.Router();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const session = require('express-session');

// Instanciating express frameworks
const app = express();

//Intializing port variable
const port = 3000;

//View engine setup
app.engine('hbs', hbs({defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

//GET Requests
router.get('/', (req, res) => {
    res.render('home');
});

//POST Requests
router.post('/submit', (rqs, res) => {

});

//Express middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));
app.use('/', router);

//satarting up server
app.listen(port, () => {
    console.log(`Server listeining on port ${port}`);
});
