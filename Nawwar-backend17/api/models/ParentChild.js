const mongoose = require('mongoose');

const ParentChildSchema = mongoose.Schema({
  parentUsername: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  childUsername: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('ParentChild', ParentChildSchema);
