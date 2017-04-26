const _ = require('lodash');

const uidGen = require('../utils/uidGenerator');
const testData = require('./data');
const Vehicle = require('../models/vehicle');

function fullFillDb() {
  return Promise.all(testData.map((testVehicle) => {
    return new Vehicle(_.merge({ sellingId: uidGen() }, testVehicle))
      .save()
      .then(() => {
        process.stdout.write('.');
      });
  }));
}

function purgeDb() {
  return Vehicle.remove({}).exec();
}

module.exports = {
  fullFillDb,
  purgeDb,
};
