"use strict";

const express = require("express");

module.exports = () => {
  const router = express.Router();

  //TODO: MONGO CONNECTION

  //TODO: IMPORTS OF DATA, API, SERVER, SERVICES

  router.use(express.json());

  return router;
};
