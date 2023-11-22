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
  scope: ['profile', 'email'],
},
  async function verify(accessToken, refreshToken, profile, cb) {
    let user = (await User.find({ googleId: profile.id }))[0]
    if (user) {
      return cb(null, user)
    } else {
      let otherUser = (await User.find({ email: profile.emails[0].value }))[0]
      if (otherUser) return cb(null, false, {message: "The email already exists"})

      let newUser = new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        verify: true
      })
      await newUser.save()
      return cb(null, newUser)
    }
  }
));

passport.use(new LocalStrategy({ usernameField: 'email' }, async function verify(email, password, done) {
  const user = (await User.find({ email: email }))[0]

  if (!user) return done(null, false, {message: "Please check the email and password again"}) // check if the user did not exist
  if (!user.password) return done(null,false, {message: "Please check the email and password again"}) // check if the account is gmail account 
  if (!user.verify) return done(null, false, { message: "You need to verify your account with gmail" }) // check if the user email is verify

  try {
    if (await bcrypt.compare(password, user.password)) {
      return done(null, user, {message: ""})
    } else {
      return done(null, false, {message: "Please check the email and password again"})
    }
  } catch{
    return done(null, false, {message: "Please check the email and password again"})
  }
}))

passport.serializeUser((user, done) => {
  done(null, user._id)
})
passport.deserializeUser(async (id, done) => {
  const user = (await User.findById(id))
  done(null, user)
})
