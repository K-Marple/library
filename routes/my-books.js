/* Required Statements */
const express = require("express");
const router = express.Router();
const { userBooks } = require("../controllers/my-books");

router.get("/", userBooks);

module.exports = router;
