require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const passport = require('passport');
const methodOverride = require('method-override')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 4000;
const routes = require('./routes/userRoutes.js')
require('./config/passport-config.js')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "https://building-it-system.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
app.use(cookieParser('ShopWebSecure'));
app.use(session({
  secret: process.env.ACCESS_TOKEN,
  saveUninitialized: false,
  resave: false
}));
app.use(flash());
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Listening to port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
