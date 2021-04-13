const mongoose = require('mongoose');
// const isURL = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    // required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
    default: 'https://avatars.mds.yandex.net/get-pdb/4477580/46906ff3-b2d5-4d1d-af98-f5a9349d75ee/s1200'
  },
  trailer: {
    type: String,
    required: true,

  },
  thumbnail: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
    // unique: true,
    // содержится в ответе сервиса MoviesExplorer
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    // required: true,
  },

  // createAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model('movie', movieSchema);
