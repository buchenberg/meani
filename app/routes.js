// app/routes.js

// grab the nerd model we just created
var Home = require('./components/home/home.model');

module.exports = function (app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/home', function (req, res) {
        // use mongoose to get all homes in the database
        Home.find(function (err, homes) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(homes); // return all homes in JSON format
        });
    });

    // sample api route
    app.get('/api/hello', function (req, res) {
            res.json({"message": "hello"}); 
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function (req, res) {
        res.sendfile('./client/index.html'); // load our public/index.html file
    });

};