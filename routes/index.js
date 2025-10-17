/* Required Statements */
const express = require("express");
const router = express.Router();
const books = require("./books");

/* Route */
router.use("/books", books);

/* Export */
module.exports = router;
