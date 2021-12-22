const { MongoClient } = require("mongodb");
require("dotenv").config();

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
    const col = db.collection("truth");

    col.update(
      { _id: "61c3aa461712da94f4417a14" },
      {
        $push: {
          quotes: "cat",
        },
      }
    );
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
