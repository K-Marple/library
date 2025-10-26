/* Required Statements */
const database = require("../database/connection");
const objectId = require("mongodb").ObjectId;

/* Functions */
const allBooks = async (req, res) => {
  try {
    const db = database.getDB();
    const db_response = await db.collection("books").find().toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ success: true, data: db_response });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Get full collection error" });
  }
};

const singleBook = async (req, res) => {
  try {
    const id = req.params.id;
    const db = database.getDB();
    const db_response = await db
      .collection("books")
      .findOne({ _id: new objectId(id) });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ success: true, data: db_response });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Get single book error" });
  }
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
    .insertOne({ _id: new objectId(), ...book });
  res.setHeader("Content-Type", "application/json");
  if (db_response.acknowledged === true) {
    res.status(201).json({ success: true, data: db_response });
  } else {
    res.status(500).json({ success: false, msg: "Adding new book error" });
  }
};

const updateBook = async (req, res) => {
  const id = req.params.id;
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
    .replaceOne({ _id: new objectId(id) }, book);
  res.setHeader("Content-Type", "application/json");
  if (db_response.modifiedCount === 1) {
    res.status(204).json({ success: true, data: db_response });
  } else {
    res.status(500).json({ success: false, msg: "Update book error" });
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  const db = database.getDB();
  const db_response = await db
    .collection("books")
    .deleteOne({ _id: new objectId(id) });
  if (db_response.deletedCount === 1) {
    res.status(200).send();
  } else {
    res.status(500).json({ success: false, msg: "Deletion error" });
  }
};

/* Exports */
module.exports = {
  allBooks,
  singleBook,
  addBook,
  updateBook,
  deleteBook,
};
