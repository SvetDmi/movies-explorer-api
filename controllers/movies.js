
const Movie = require('../models/movieModel');
const { ErrorBadRequest400, ErrorForbidden403, ErrorNotFound404 } = require('../errors/index');
const { badRequest, movieNotFound, movieNotForbidden, movieDelete } = require('../utils/answers');

const createMovie = (req, res, next) => {
  const {
    movieId,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
  } = req.body;

  const owner = req.user.id;

  Movie.create({
    movieId,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
    owner,
  })
    .then((movie) => {
      if (!movie) {
        throw new ErrorBadRequest400(badRequest);
      }
      return res.status(200).send(movie);
    })
    .catch(next);
};

const getMovies = (req, res, next) => {
  Movie.find({}).sort('-nameRU')
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new ErrorNotFound404(movieNotFound);
      } else if (JSON.stringify(movie.owner) !== JSON.stringify(req.user.id)) {
        throw new ErrorForbidden403(movieNotForbidden);
      }
      return res.status(200).send(`${movieDelete} ${movie.nameRU}`);
      // return res.status(200).send(movie.id);
    })
    .catch(next);
};

module.exports = {
  getMovies, createMovie, deleteMovie,
};
