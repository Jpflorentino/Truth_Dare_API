"use strict";

const { MongoClient, AggregationCursor } = require("mongodb");
require("dotenv").config();
const url = process.env.CONNECTION_STRING;
const client = new MongoClient(url);
// The database to use
const dbName = "truth-dare-db";

module.exports = () => {
  return {
    getTruth: async (indexNumbers) => {
      let object = {
        truth: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truths");
        await collection
          .aggregate([
            {
              $project: {
                truth: { $arrayElemAt: ["$quotes", indexNumbers[0]] },
              },
            },
          ])
          .forEach((result) => (object.truth = result.truth));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getTruthNSFW: async (indexNumbers) => {
      let object = {
        truthNSFW: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truthsNSFW");
        await collection
          .aggregate([
            {
              $project: {
                truthNSFW: { $arrayElemAt: ["$quotes", indexNumbers[0]] },
              },
            },
          ])
          .forEach((result) => (object.truthNSFW = result.truthNSFW));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getDare: async (indexNumbers) => {
      let object = {
        dare: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truthsNSFW");
        await collection
          .aggregate([
            {
              $project: {
                dare: { $arrayElemAt: ["$quotes", indexNumbers[0]] },
              },
            },
          ])
          .forEach((result) => (object.dare = result.dare));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getDareNSFW: async (indexNumbers) => {
      let object = {
        dareNSFW: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truthsNSFW");
        await collection
          .aggregate([
            {
              $project: {
                dareNSFW: { $arrayElemAt: ["$quotes", indexNumbers[0]] },
              },
            },
          ])
          .forEach((result) => (object.dareNSFW = result.dareNSFW));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getAllTruths: async () => {
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truths");
        const truths = await collection.findOne();
        return {
          truths: truths.quotes,
        };
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getAllTruthsNSFW: async () => {
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truthsNSFW");
        const truthsNSFW = await collection.findOne();
        return {
          truthsNSFW: truthsNSFW.quotes,
        };
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getAllDares: async () => {
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("dares");
        const dares = await collection.findOne();
        return {
          dares: dares.quotes,
        };
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getAllDaresNSFW: async () => {
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("daresNSFW");
        const daresNSFW = await collection.findOne();
        return {
          daresNSFW: daresNSFW.quotes,
        };
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getSpecificTruthsNumber: async (indexNumbers) => {
      let object = {
        truths: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truths");
        await collection
          .aggregate([
            {
              $project: {
                truths: {
                  $map: {
                    input: indexNumbers,
                    as: "i",
                    in: {
                      $arrayElemAt: ["$quotes", "$$i"],
                    },
                  },
                },
              },
            },
          ])
          .forEach((result) => (object.truths = result.truths));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },

    getSpecificTruthsNumberNSFW: async (indexNumbers) => {
      let object = {
        truthsNSFW: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("truthsNSFW");
        await collection
          .aggregate([
            {
              $project: {
                truthsNSFW: {
                  $map: {
                    input: indexNumbers,
                    as: "i",
                    in: {
                      $arrayElemAt: ["$quotes", "$$i"],
                    },
                  },
                },
              },
            },
          ])
          .forEach((result) => (object.truthsNSFW = result.truthsNSFW));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },
    getSpecificDaresNumber: async (indexNumbers) => {
      let object = {
        dares: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("dares");
        await collection
          .aggregate([
            {
              $project: {
                dares: {
                  $map: {
                    input: indexNumbers,
                    as: "i",
                    in: {
                      $arrayElemAt: ["$quotes", "$$i"],
                    },
                  },
                },
              },
            },
          ])
          .forEach((result) => (object.dares = result.dares));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },
    getSpecificDaresNumberNSFW: async (indexNumbers) => {
      let object = {
        daresNSFW: "",
      };
      try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("daresNSFW");
        await collection
          .aggregate([
            {
              $project: {
                daresNSFW: {
                  $map: {
                    input: indexNumbers,
                    as: "i",
                    in: {
                      $arrayElemAt: ["$quotes", "$$i"],
                    },
                  },
                },
              },
            },
          ])
          .forEach((result) => (object.daresNSFW = result.daresNSFW));
        return object;
      } catch (err) {
        return {
          message: err.stack,
        };
      } finally {
        await client.close();
      }
    },
  };
};
