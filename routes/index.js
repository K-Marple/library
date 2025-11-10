/* Required Statements */
const express = require("express");
const router = express.Router();
const books = require("./books");
const authors = require("./authors");
const login = require("./login");
const auth = require("./auth");
const userBooks = require("./my-books");

/* Route */
router.use("/books", books);
router.use("/authors", authors);

router.use("/login", login);
router.use("/auth", auth);
router.use("/my-books", userBooks);

/* Export */
module.exports = router;
