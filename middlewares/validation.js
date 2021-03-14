const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateAuth = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': 'Минимум 2 символа',
        'string.max': 'Максимум 30 символов',
        'any.required': 'Незаполнено обязательное поле',
      }),
    email: Joi.string().required()
      .messages({
        'any.required': 'Незаполнено обязательное поле',
      })
      .custom((value, helper) => {
        if (validator.isEmail(value)) {
          return value;
        }
        return helper.message('Невалидный email');
      }),

    password: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    })
      .custom((value, helper) => {
        if (validator.isEmail(value)) {
          return value;
        }
        return helper.message('Невалидный email');
      }),
    password: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
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
    movieId: Joi.number().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    country: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    director: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    duration: Joi.number().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    year: Joi.number().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    description: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    owner: Joi.required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    nameRU: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    nameEN: Joi.string().required().messages({
      'any.required': 'Незаполнено обязательное поле',
    }),
    // Должно работать, но не работает....
    // .options({ presence: 'required' })
    // .messages({
    //   'any.required': 'Обязательное поле',
    // }),

  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().custom((value, helper) => {
      if (validator.isMongoId(value)) {
        return value;
      }
      return helper.message('Невалидный URL');
    }),
  }),
});

module.exports = {
  validateUser, validateMovie, validateId, validateAuth,
};
