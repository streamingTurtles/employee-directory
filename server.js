require('dotenv').config();
const express = require('express');
const path = require('path');

const routes = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3001;



const passport = require('passport');
require('./config/passport');





app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());








app.use(express.static(path.join(__dirname, '/public')));

// turn on routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
