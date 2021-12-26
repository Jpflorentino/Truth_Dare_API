const { MongoClient } = require("mongodb");
require("dotenv").config();
const document = require("../files/dares.json");

// Replace the following with your Atlas connection string
const url = process.env.CONNECTION_STRING;
const client = new MongoClient(url);

// The database to use
const dbName = "truth-dare-db";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("dares");
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(document);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
