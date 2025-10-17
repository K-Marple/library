/* Required Statements */
const dotenv = require("dotenv");
dotenv.config();
const mongo = require("mongodb").MongoClient;

/* Database Connection */
let _db;

const connectDB = async () => {
  if (_db) {
    console.log("Database exists");
    return _db;
  }
  try {
    const client = await mongo.connect(process.env.MONGODB_URI);
    _db = client.db("library");
    console.log("MongoDB connected");
    return _db;
  } catch (err) {
    console.log("Connection unsuccessful:", err);
    throw err;
  }
};

const getDB = () => {
  return _db;
};

/* Exports */
module.exports = { connectDB, getDB };
