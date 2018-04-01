const mongoose = require('mongoose');

const Reviews_Article_ActivitySchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    min: 0
  },
  comment: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  type: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('Reviews_Article_Activity', Reviews_Article_ActivitytSchema);
