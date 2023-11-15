const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const passport = require('passport')
require('dotenv').config()


passport.use(new LocalStrategy({ usernameField: 'username', passReqToCallback: true }, async function (req, username, password, done) {
  const user = (await User.find({ username: username }))[0]
  if (user == null) {
    return done(null, false, { message: 'Wrong password or username' })
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ user: user }, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
      let userObject = user.toObject();
      userObject.accessToken = accessToken;
      return done(null, userObject)
    } else {
      return done(null, false, { message: 'Wrong password or username' })
    }
  } catch (e) {
    return done(e)
  }
}))

passport.serializeUser((user, done) => done(null, user._id))
passport.deserializeUser((id, done) => {
  return done(null, async () => { return (await User.findById(id)[0]) })
})
