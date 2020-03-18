const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport= require('passport');
const require = require('express-session');
// Initializations

const app = express();
require('./database')
require('./routes/passport/local-auth');

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', require('./routes/index'));


// STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});