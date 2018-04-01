const mongoose = require('mongoose');

const ActivitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  {
  price: {
    type: Number,
    required: true,
    min: 0
  },// removed id because it already has hash for the password which is considered an id
  creatorUsername: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  maxUsers: { // users not children because parents,teachers can be users
    type: Number,
    required: true,
    min: 0
  },
  interested: {
    type: Number,
    required: true,
    min: 0
  },
  activityScore: {
    type: Number,
    required: true,
    min: 0
  }
});

mongoose.model('Activity', ActivitySchema);
