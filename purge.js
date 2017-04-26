const mongoose = require('mongoose');

const bootstrap = require('./test/bootstrapHelper');
const config = require('./config/configApp');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || config.database);

bootstrap.purgeDb().then(() => {
  console.log('DB purged successfully');
  process.exit();
});
