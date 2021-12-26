"use strict";

const express = require("express");

module.exports = () => {
  const router = express.Router();

  const truthDareDB = require("./data/truthDareDB")();
  const truthDareService = require("./services/truthDareServices")(truthDareDB);
  const truthDareApi = require("./api/truthDareApi")(truthDareService);

  router.use(express.json());

  router.get("/", (req, res) => {
    res.send("Welcome to Truth Dare Api");
  });

  router.get("/truthDareApi/truth", truthDareApi.getTruth);
  router.get("/truthDareApi/truthNSFW", truthDareApi.getTruthNSFW);
  router.get("/truthDareApi/dare", truthDareApi.getDare);
  router.get("/truthDareApi/dareNSFW", truthDareApi.getDareNSFW);
  router.get("/truthDareApi/truth/all", truthDareApi.getAllTruths);
  router.get("/truthDareApi/truthNSFW/all", truthDareApi.getAllTruthsNSFW);
  router.get("/truthDareApi/dare/all", truthDareApi.getAllDares);
  router.get("/truthDareApi/dareNSFW/all", truthDareApi.getAllDaresNSFW);
  router.get("/truthDareApi/truth/:truthsNumber", truthDareApi.getSpecificTruthsNumber);
  router.get("/truthDareApi/truthNSFW/:truthsNSFWNumber", truthDareApi.getSpecificTruthsNumberNSFW);
  router.get("/truthDareApi/dare/:daresNumber", truthDareApi.getSpecificDaresNumber);
  router.get("/truthDareApi/dareNSFW/:daresNSFWNumber", truthDareApi.getSpecificDaresNumberNSFW);

  return router;
};
