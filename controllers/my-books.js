const database = require("../database/connection");

const userBooks = async function (req, res, next) {
  const db = await database.getDB();
  const data = await db.collection("books").find().toArray();
  res.render("my-books", {
    title: "My Books",
    books: data,
  });
};

module.exports = { userBooks };
