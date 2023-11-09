require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const { error } = require("console");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 4000;
const routes = require('./routes/userRoutes.js')

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser('ShopWebSecure'));
app.use(session({
  secret: 'ShopWebSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());
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
