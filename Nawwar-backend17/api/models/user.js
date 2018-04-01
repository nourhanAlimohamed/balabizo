const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {//unique
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  firstname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: false,//not required
    min: 5 // minimum age of users will be 5
  },
  location: {
    type: String,
    required: false,//not required
    trim: true,
    lowercase: true
  },
  educationalSystem: {
    type: String,
    required: false,// you can add it later after regitering
    trim: true,
    lowercase: true
  },
  role: {// changed from type
    type: String,
    required: false,// it is not required because it is set by the admin
    trim: true,
    lowercase: true,
    default: 'normal'// normal user --limited functionality
  },
  childScore: {
    type: Number,
    required: false,
    trim: true,
    default: 0 // it is an attribute and edited field by users
  },
  parent: {// all the users will have the parent field empty
    //unless he/she is a child
    //and it will contain parent's username
    type: String,
    required: false,
    trim: true
  },

    subject: { // if he is ateacher
      type: String,
      required: false,
      trim: true
    },
    yearsofexperience: {// if he is a teacher
      type: Number,
      required: false,
      trim: true
    }


});

mongoose.model('User', UserSchema);
