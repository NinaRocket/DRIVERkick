const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const passport = require("passport");

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  // vehical reference
  vehicle: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
});

// checks if unhashed entered password matches the hashed password in the database
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// hashes user password before saving a new user
UserSchema.pre("save", function (next) {
  if (this.isNew) {
    this.password = bcrypt.hashSync(
      this.password,
      bcrypt.genSaltSync(10),
      null
    );
    next();
  } else {
    next();
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

module.exports.getUserByUsername = function (username, callback) {
  var query = { username: username };
  User.findOne(query, callback);
};

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};

var LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: "Unknown User" });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});
