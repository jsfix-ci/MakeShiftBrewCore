var BrewUI = require('brew-ui');
var config = {};

config.env = process.env.NODE_ENV;
config.port =  process.env.PORT || 3000;
config.clientDir = process.env.CLIENT_DIR || BrewUI.getStaticPath();
config.mongo = {
  connect: process.env.MONGODB_URI || 'mongodb://iad2-c5-0.mongo.objectrocket.com:52136'
};

config.spark = {
  token: process.env.SPARK_TOKEN || 'ec79d2d79e41d5048d951fb25f308cf3a99494ff',
  device1: process.env.SPARK_DEVICE1 || '3b001d001147353236343033'
};

config.mock = process.env.MOCK || '';
config.logFrequency = process.env.STATUS_FREQ ? parseInt(process.env.STATUS_FREQ, 10) : 30000;

module.exports = config;
