/* Required Statements */
const express = require("express");
const router = express.Router();
const books = require("./books");
const authors = require("./authors");

/* Route */
router.use("/books", books);
router.use("/authors", authors);

/* Export */
module.exports = router;
