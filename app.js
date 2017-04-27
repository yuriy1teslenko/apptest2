const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const schedule = require('node-schedule');

const config = require('./config/configApp');
const api = require('./service/api');
const uploader = require('./workers/uploader');

const app = express();
const portSrv = parseInt((process.env.PORT || config.service.port), 10);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || config.database);

app.use(bodyParser.json());

app.post('/vehicles', api.post);
app.get('/vehicles/:sellingId', api.show);
app.get('/vehicles', api.list);

schedule.scheduleJob(config.scheduleRule, () => uploader());

app.listen(portSrv);
console.log();
console.log(`Express server listening on port ${portSrv}`);
