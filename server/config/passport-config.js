const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const passport = require('passport')
require('dotenv').config()

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  scope: ['profile'],
},
  async function verify(accessToken, refreshToken, profile, cb) {
    let user = (await User.find({ googleId: profile.id }))[0]
    if (user) {
      return cb(null, user)
    } else {
      let newUser = new User({
        googleId: profile.id,
        username: profile.displayName,
      })
      await newUser.save()
      return cb(null, newUser)
    }
  }
));

passport.use(new LocalStrategy({ usernameField: 'username' }, async function verify(username, password, done) {
  const user = (await User.find({ username: username }))[0]
  if (user == null) {
    return done(null, false)
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  } catch (e) {
    return done(e)
  }
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})
passport.deserializeUser(async (id, done) => {
  const user = (await User.findById(id))
  done(null, user)
})
