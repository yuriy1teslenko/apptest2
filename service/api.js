const statusCode = require('http-status-codes');
const _ = require('lodash');

const Vehicle = require('../models/vehicle');
const uidGen = require('../utils/uidGenerator');

function errorHendler(next, error) {
  console.error(error);
  next(error);
}

function mapToResponse(item) {
  return _.omit(item._doc, ['_id', '__v']);
}

exports.post = (req, res, next) => {
  new Vehicle({
    sellingId: uidGen(),
    Brand: req.body.Brand,
    Model: req.body.Model,
    Title: req.body.Title,
    Price: req.body.Price,
    uploaded: false,
  })
    .save()
    .then((result) => {
      console.log(result);
      res.status(statusCode.CREATED)
        .send(mapToResponse(result));
    })
    .catch(err => errorHendler(next, err));
};

exports.list = (req, res, next) => {
  Vehicle
    .find()
    .exec()
    .then((vehicles) => {
      res.status(statusCode.OK)
        .send(vehicles.map(mapToResponse));
    })
    .catch(err => errorHendler(next, err));
};

exports.show = ((req, res, next) => {
  Vehicle
    .findOne({ sellingId: req.params.sellingId })
    .exec()
    .then((vehicle) => {
      res.status(statusCode.OK)
        .send(mapToResponse(vehicle));
    })
    .catch(err => errorHendler(next, err));
});
