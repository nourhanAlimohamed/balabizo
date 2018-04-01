const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  experience: {
    type: number,
    required: true,
    min: 0
  },
  teacher: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('RequestSchema', RequestSchema);
