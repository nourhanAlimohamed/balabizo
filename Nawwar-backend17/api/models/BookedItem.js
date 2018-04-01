const mongoose = require('mongoose');

const BookedItemSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    min: 0
  },
  bookerUsername: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  posterUsername: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

mongoose.model('BookedItem', BookedItemSchema);
