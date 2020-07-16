const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', (error) => console.log(error));
// eslint-disable-next-line no-console
db.once('open', () => console.log('DB connected'));

module.exports = db;
