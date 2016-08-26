/**
 * Mongoose brew model
 *
 * @module Brew
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BrewSchema;

BrewSchema = new Schema({

  name: {
    index: true,
    type: String,
    required: true
  },

  startTime: {
    index: true,
    type: Date,
    'default': Date.now
  },

  phases: [{
    min: {
      type: Number,
      required: false
    },
    temp:{
      type: Number,
      required: false
    },
    gallons:{
      type: Number,
      required: false
    },
    type: {
      type: String,
      required: true
    }
  }],

  logs: [{
    min: {
      type: Number,
      required: false
    },
    temp:{
      type: Number,
      required: false
    },
    gallons:{
      type: Number,
      required: false
    },
    type: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      'default': Date.now
    }
  }],

  activity: [{
    name: {
      type: String,
      required: true
    },
    additional: Schema.Types.Mixed,
    date: {
      type: Date,
      'default': Date.now
    }
  }]
});


// model
module.exports = mongoose.model('Brew', BrewSchema);
