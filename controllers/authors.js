/* Required Statements */
const database = require("../database/connection");
const objectId = require("mongodb").ObjectId;

/* Functions */
const allAuthors = async (req, res) => {
  try {
    const db = database.getDB();
    const db_response = await db.collection("authors").find().toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ success: true, data: db_response });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Get full collection error" });
  }
};

const singleAuthor = async (req, res) => {
  try {
    const id = req.params.id;
    const db = database.getDB();
    const db_response = await db
      .collection("authors")
      .findOne({ _id: new objectId(id) });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({ success: true, data: db_response });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Get single author error" });
  }
};

const addAuthor = async (req, res) => {
  const author = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthdate: req.body.birthdate,
    funFact: req.body.funFact,
    works: req.body.works,
  };
  const db = database.getDB();
  const db_response = await db
    .collection("authors")
    .insertOne({ _id: new objectId(), ...author });
  res.setHeader("Content-Type", "application/json");
  if (db_response.acknowledged === true) {
    res.status(201).json({ success: true, data: db_response });
  } else {
    res.status(500).json({ success: false, msg: "Adding new author error" });
  }
};

const updateAuthor = async (req, res) => {
  const id = req.params.id;
  const author = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthdate: req.body.birthdate,
    funFact: req.body.funFact,
    works: req.body.works,
  };
  const db = database.getDB();
  const db_response = await db
    .collection("authors")
    .replaceOne({ _id: new objectId(id) }, author);
  res.setHeader("Content-Type", "application/json");
  if (db_response.modifiedCount === 1) {
    res.status(204).json({ success: true, data: db_response });
  } else {
    res.status(500).json({ success: false, msg: "Update author error" });
  }
};

const deleteAuthor = async (req, res) => {
  const id = req.params.id;
  const db = database.getDB();
  const db_response = await db
    .collection("authors")
    .deleteOne({ _id: new objectId(id) });
  if (db_response.deletedCount === 1) {
    res.status(200).send();
  } else {
    res.status(500).json({ success: false, msg: "Deletion error" });
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
