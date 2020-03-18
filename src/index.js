const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan')

// Initializations

const app = express();
require('./database')

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', require('./routes/index'));


// STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});