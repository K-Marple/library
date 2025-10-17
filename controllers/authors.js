/* Required Statements */
const database = require("../database/connection");
const objectId = require("mongodb").ObjectId;

/* Functions */
const allAuthors = async (req, res) => {
  const db = database.getDB();
  const db_response = await db.collection("authors").find().toArray();
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(db_response);
};

const singleAuthor = async (req, res) => {
  const id = req.params.id;
  const db = database.getDB();
  const db_response = await db.collection("authors").findOne({ _id: id });
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(db_response);
};

const addAuthor = async (req, res) => {
  const author = {
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
    .collection("authors")
    .insertOne({ _id: new objectId(), author });
  res.setHeader("Content-Type", "application/json");
  res.status(201).json(db_response);
};

const updateAuthor = async (req, res) => {
  const id = req.params.id;
  const author = {
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
    .collection("authors")
    .replaceOne({ _id: id }, author);
  res.setHeader("Content-Type", "application/json");
  res.status(204).json(db_response);
};

const deleteAuthor = async (req, res) => {
  const id = req.params.id;
  const db = database.getDB();
  const db_response = await db.collection("authors").deleteOne({ _id: id });
  if (db_response.deletedCount === 1) {
    res.status(200).send();
  }
};

/* Exports */
module.exports = {
  allAuthors,
  singleAuthor,
  addAuthor,
  updateAuthor,
  deleteAuthor,
};
