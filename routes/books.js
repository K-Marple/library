/* Required Statements */
const express = require("express");
const router = express.Router();
const {
  allBooks,
  singleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

/* Routes */
/**
 * @route GET /books
 * @description Get all books
 * @returns {object} 200 - Book array
 * @returns {Error} 401 - Unauthorized
 */
router.get("/", allBooks);

/**
 * @route POST /books
 * @description Add book
 * @param {object} book.body
 * @returns {object} 200 - Book added
 * @returns {Error} 401 - Unauthorized
 */
router.post("/", addBook);
