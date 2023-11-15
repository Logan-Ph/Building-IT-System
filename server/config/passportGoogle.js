require('dotenv').config()
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  scope: ['profile'],
},
  async function verify (accessToken, refreshToken, profile, cb) {
    let user = (await User.find({ googleId: profile.id }))[0]
    if (user) {
      console.log("found")
      const accessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
      let userObject = user.toObject();
      userObject.accessToken = accessToken;
      return cb(null, userObject)
    } else {
      let newUser = new User({
        googleId: profile.id,
        username: profile.displayName,
      })
      await newUser.save()
      const accessToken = jwt.sign({ user: newUser }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
      let userObject = newUser.toObject();
      userObject.accessToken = accessToken;
      return cb(null, userObject)
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.googleId);
})

passport.deserializeUser(async (googleId, done) => {
  const user = (await User.find({ googleId: googleId }))[0]
  console.log(user)
  done(null,user)
})
