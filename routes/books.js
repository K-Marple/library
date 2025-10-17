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
 * @route GET /books/:id
 * @description Get one book by its id
 * @param {string} id.path
 * @returns {object} 200 - Book
 * @returns {Error} 401 - Unauthorized
 */
router.get("/:id", singleBook);

/**
 * @route POST /books
 * @description Add book
 * @param {object} book.body
 * @returns {object} 200 - Book added
 * @returns {Error} 401 - Unauthorized
 */
router.post("/", addBook);

/**
 * @route PUT /books/:id
 * @description Update book by id
 * @param {string} id.path
 * @param {object} book.body
 * @returns {object} 200 - Book updated
 * @returns {Error} 401 - Unauthorized
 */
router.put("/:id", updateBook);

/**
 * @route DELETE /books/:id
 * @description Delete book by id
 * @param {string} id.path
 * @returns 200 - Book deleted
 * @returns {Error} 401 - Unauthorized
 */
router.delete("/:id", deleteBook);

/* Exports */
module.exports = router;
