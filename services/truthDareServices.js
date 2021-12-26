"use strict";

const utils = require("../utils/functions")();

module.exports = (truthDareDB) => {
  return {
    getTruth: () => {
      return truthDareDB.getAllTruths().then((result) => {
        const length = result.truths.length;
        const indexNumbers = utils.multipleTimes(0, length, 1);
        return truthDareDB.getTruth(indexNumbers);
      });
    },

    getTruthNSFW: () => {
      return truthDareDB.getAllTruthsNSFW().then((result) => {
        const length = result.truthsNSFW.length;
        const indexNumbers = utils.multipleTimes(0, length, 1);
        return truthDareDB.getTruthNSFW(indexNumbers);
      });
    },

    getDare: () => {
      return truthDareDB.getAllDares().then((result) => {
        const length = result.dares.length;
        const indexNumbers = utils.multipleTimes(0, length, 1);
        return truthDareDB.getDare(indexNumbers);
      });
    },

    getDareNSFW: () => {
      return truthDareDB.getAllDaresNSFW().then((result) => {
        const length = result.daresNSFW.length;
        const indexNumbers = utils.multipleTimes(0, length, 1);
        return truthDareDB.getDareNSFW(indexNumbers);
      });
    },

    getAllTruths: () => {
      return truthDareDB.getAllTruths();
    },

    getAllTruthsNSFW: () => {
      return truthDareDB.getAllTruthsNSFW();
    },

    getAllDares: () => {
      return truthDareDB.getAllDares();
    },

    getAllDaresNSFW: () => {
      return truthDareDB.getAllDaresNSFW();
    },

    getSpecificTruthsNumber: (truthsNumber) => {
      if (truthsNumber == 0) {
        return Promise.reject({
          message: "Truths number should be higher than zero",
        });
      }
      return truthDareDB.getAllTruths().then((result) => {
        const length = result.truths.length;
        const indexNumbers = utils.multipleTimes(0, length, truthsNumber);
        return truthDareDB.getSpecificTruthsNumber(indexNumbers);
      });
    },

    getSpecificTruthsNumberNSFW: (thruthsNumberNSFW) => {
      if (thruthsNumberNSFW == 0) {
        return Promise.reject({
          message: "TruthsNSFW number should be higher than zero",
        });
      }
      return truthDareDB.getAllTruthsNSFW().then((result) => {
        const length = result.truthsNSFW.length;
        const indexNumbers = utils.multipleTimes(0, length, thruthsNumberNSFW);
        return truthDareDB.getSpecificTruthsNumberNSFW(indexNumbers);
      });
    },

    getSpecificDaresNumber: (daresNumber) => {
      if (daresNumber == 0) {
        return Promise.reject({
          message: "Dares number should be higher than zero",
        });
      }
      return truthDareDB.getAllDares().then((result) => {
        const length = result.dares.length;
        const indexNumbers = utils.multipleTimes(0, length, daresNumber);
        return truthDareDB.getSpecificDaresNumber(indexNumbers);
      });
    },

    getSpecificDaresNumberNSFW: (daresNumberNSFW) => {
      if (daresNumberNSFW == 0) {
        return Promise.reject({
          message: "DaresNSFW number should be higher than zero",
        });
      }
      return truthDareDB.getAllDaresNSFW().then((result) => {
        const length = result.daresNSFW.length;
        const indexNumbers = utils.multipleTimes(0, length, daresNumberNSFW);
        return truthDareDB.getSpecificDaresNumberNSFW(indexNumbers);
      });
    },
  };
};
