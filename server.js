// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
<<<<<<< HEAD
// const passport = require("./config/passport");
=======
/* const passport = require("./config/passport"); */
>>>>>>> f27176c8ecea60e3b28cfc43f71d052aecc11f59

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
<<<<<<< HEAD
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
=======
/* app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); */
/* app.use(passport.initialize());
app.use(passport.session()); */
>>>>>>> f27176c8ecea60e3b28cfc43f71d052aecc11f59

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});



















// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {

    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});