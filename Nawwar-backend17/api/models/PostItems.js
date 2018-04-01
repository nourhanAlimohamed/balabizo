const mongoose = require('mongoose');

const PostItemsSchema = mongoose.Schema({
  name: {
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
  price: {
    type: Number,
    required: true,
    min: 0
  },
  type: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  likes: {
    type: Number,
    required: true,
    min: 0
  }
});

mongoose.model('PostItems', PostItemsSchema);
