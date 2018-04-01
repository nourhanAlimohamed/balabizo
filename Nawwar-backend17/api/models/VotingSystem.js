const mongoose = require('mongoose');

const VotingSystemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  content: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  id: {
    type: Number,
    required: true,
    min: 0
  },
  votes: {
    type: Number,
    required: true,
    min: 0
  },
  writer: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('VotingSystem', VotingSystemSchema);
