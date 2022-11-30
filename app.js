const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const UserModel = require('./model/model');

require('./auth/auth');
const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);
// Handle errors.
app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({ error: err });
});

const PORT = 6000;
app.set('port', PORT || 3000);
async function start(){
        try {
                await mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, });
                mongoose.connection.on('error', error => console.log(error) );
                mongoose.Promise = global.Promise;
                var server = app.listen(app.get('port'), function() {
                        console.log('Express server listening on port ' + server.address().port);
                });            
        } catch (e) {
            console.log('Server error: ' + e.message);
            process.exit(1);
        }
    }
    
start();

