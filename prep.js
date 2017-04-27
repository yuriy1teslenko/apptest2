const mongoose = require('mongoose');

const bootstrap = require('./test/bootstrapHelper');
const config = require('./config/configApp');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || config.database);

if (process.argv[2] === '-purge') {
  bootstrap.purgeDb().then(() => {
    console.log('DB purged successfully');
    process.exit();
  });
} else {
  bootstrap.fullFillDb().then(() => {
    console.log();
    console.log('DB filled successfully');
    process.exit();
  });

}

