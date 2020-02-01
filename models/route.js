"use strict";

const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  },
  userID: {
    type: String,
    required: false
  }
});

const Route = mongoose.model("Route", routeSchema);

module.exports = Route;
