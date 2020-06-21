const express = require('express');
const app = express();
const morgan = require('morgan');



//setting
app.set('port', process.env.PORT || 4000);
app.set('json spaces',2);

//Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Ruteador y sus routes

app.use(require('./routes/index')); //Enrutador


app.use('/api/movies',require('./routes/movies')); //Ruta movies
app.use('/api/users',require('./routes/users')); // Ruta Users


// starting server
app.listen(app.get('port'),() => {
    console.log(`server on port ${app.get('port')}`);
});