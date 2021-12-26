"use strict";

const urlParse = require("url").parse;

module.exports = (truthDareServices) => {
  function errorHandler(err, res) {
    const erro = {
      message: err.message,
    };
    res.json(erro);
  }

  function niceHandler(body, res) {
    res.status = 200;
    res.setHeader("Content-type", "application/json");
    res.send(body);
  }

  return {
    getTruth: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getTruth().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getTruthNSFW: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getTruthNSFW().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getDare: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getDare().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getDareNSFW: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getDareNSFW().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getAllTruths: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getAllTruths().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getAllTruthsNSFW: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getAllTruthsNSFW().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getAllDares: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getAllDares().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getAllDaresNSFW: (req, res) => {
      console.log(req.method + ": " + req.url);
      truthDareServices.getAllDaresNSFW().then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getSpecificTruthsNumber: (req, res) => {
      const urlPathname = urlParse(req.url, true);
      const truthsNumber = urlPathname.path.split("/")[3];
      console.log(req.method + ": " + req.url);
      truthDareServices.getSpecificTruthsNumber(truthsNumber).then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getSpecificTruthsNumberNSFW: (req, res) => {
      const urlPathname = urlParse(req.url, true);
      const truthsNumberNSFW = urlPathname.path.split("/")[3];
      console.log(req.method + ": " + req.url);
      truthDareServices.getSpecificTruthsNumberNSFW(truthsNumberNSFW).then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getSpecificDaresNumber: (req, res) => {
      const urlPathname = urlParse(req.url, true);
      const daresNumber = urlPathname.path.split("/")[3];
      console.log(req.method + ": " + req.url);
      truthDareServices.getSpecificDaresNumber(daresNumber).then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },

    getSpecificDaresNumberNSFW: (req, res) => {
      const urlPathname = urlParse(req.url, true);
      const daresNumberNSFW = urlPathname.path.split("/")[3];
      console.log(req.method + ": " + req.url);
      truthDareServices.getSpecificDaresNumberNSFW(daresNumberNSFW).then(
        (body) => niceHandler(body, res),
        (err) => errorHandler(err, res)
      );
    },
  };
};
