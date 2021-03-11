require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const limiter = require('./utils/limiter');

const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
// const { PORT = 3002 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(errorLogger);
app.use(errors());
// app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// app.use(() => {
//   throw new ErrorNotFound404('Запрашиваемый ресурс не найден');
// });





