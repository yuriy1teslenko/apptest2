const request = require('request-promise-native');
const co = require('co');
const _ = require('lodash');

const config = require('../config/configApp.json')
const Vehicle = require('../models/vehicle');

module.exports = () => {
  co(function* () {
    let dbVehicles = yield Vehicle.find({ uploaded: false });
    yield dbVehicles.map((dbVehicle) => {
      let reqOptions = {
        uri: config.dealerApi,
        method: 'POST',
        body: _.omit(dbVehicle, ['_id', 'uploaded']),
        json: true,
      };
      return request(reqOptions)
        .then(() => {
          Vehicle.update({ _id: dbVehicle._id }, { $set: { uploaded: true } }).exec();
          process.stdout.write('.');
        })
        .catch((e) => {
          console.info(`item database id: ${dbVehicle._id}, selling id: ${dbVehicle.sellingId} hasn't been uploaded due to error: ${e}`);
        });
    });
  });

};

