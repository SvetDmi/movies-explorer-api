const mongoAdress = 'mongodb://localhost:27017/moviesdb';
const mongoObject = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

module.exports = { mongoAdress, mongoObject };
