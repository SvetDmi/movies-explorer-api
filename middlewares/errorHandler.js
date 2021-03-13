/* eslint-disable no-unused-vars */
const { CelebrateError } = require('celebrate');
const mongoose = require('mongoose');

// const errorHandler = (err, req, res, next) => {
//   console.log(err);
//   if (err instanceof CelebrateError) {
//     return res.send({
//       statusCode: 400,
//       message: err,
//     });
//   }
//   if (err.name === 'CastError' || err.name === 'ValidationError') {
//     return res.status(404).send('Данные не прошли валидацию');
//   }
//   if (err.status) {
//     return res.status(err.status).send({ message: err.message });
//   }
//   return res.status(500).send({ message: err.message });
// };

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CelebrateError) {
    return res.status(400).send(err.details.get('body'));
  }
  if (err.name === 'MongoError' && err.code === 11000) {
    return res.status(400).send({ message: err.message });
  }
  if (err.status) {
    return res.status(err.status).send({ message: err.message });
  }
  return res.status(500).send({ message: err.message });
};

module.exports = errorHandler;
