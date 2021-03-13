const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      'string-min': 'Минимум 2 символа',
      'string-max': 'Максимум 30 символов',
    }),
    email: Joi.string().required().custom((value, helper) => {
      if (validator.isEmail(value)) {
        return value;
      }
      return helper.message('Невалидный email');
    }),
  }).unknown(true),
});

const validateMovie = celebrate({
  body: Joi.object().keys({
    image: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Невалидный URL');
    }),
    trailer: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Невалидный URL');
    }),
    thumbnail: Joi.string().required().custom((value, helper) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helper.message('Невалидный URL');
    }),
  }).unknown(true),
});

// const validateId = celebrate({
//   params: Joi.object().keys({
//     id: Joi.string().required().custom((value, helper) => {
//       if (validator.isMongoId(value)) {
//         return value;
//       }
//       return helper.message('Невалидный URL');
//     }),
//   }),
// });

// const validateId = celebrate({
//   params: Joi.object().keys({
//     id: Joi.string().required().alphanum().length(24)
//       .custom((id, helper) => {
//         if (validator.isAlphanumeric(id)) {
//           return id;
//         }
//         return helper.message('Невалидный Id');
//       }),
//   }),
// });

module.exports = {
  validateUser, validateMovie,
};
