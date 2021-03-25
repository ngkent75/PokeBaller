// Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

// const routes = require('./controllers');
const sequelize = require('./config/connection');

// Sets up the Express App
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Sets up the routes
// app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening http://localhost:' + PORT));
  });