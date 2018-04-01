const mongoose = require('mongoose');

const SchedulingSchema = mongoose.Schema({
  item: {
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
  },
  status: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('Scheduling', SchedulingSchema);
