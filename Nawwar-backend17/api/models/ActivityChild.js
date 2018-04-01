const mongoose = require('mongoose');

const ActivityChildSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    min: 0
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('ActivityChild', ActivityChildSchema);
