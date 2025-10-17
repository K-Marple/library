/* Required Statements */
const database = require("../database/connection");
const objectId = require("mongodb").ObjectId;

/* Functions */
const allBooks = async (req, res) => {
  const db = database.getDB();
  const db_response = await db.collection("books").find().toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(db_response);
};

const addBook = async (req, res) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    published: req.body.published,
    genre: req.body.genre,
    length: req.body.length,
    rating: req.body.rating,
  };
  const db = database.getDB();
  const db_response = await db
    .collection("books")
    .insertOne({ _id: new objectId(), book });
  res.setHeader("Content-Type", "application/json");
  res.status(201).json(db_response);
};

/* Exports */
module.exports = {
  allBooks,
  addBook,
};
