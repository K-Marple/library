/* Required Statements */
const express = require("express");
const router = express.Router();
const {
  allAuthors,
  singleAuthor,
  addAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authors");

/* Routes */
/**
 * @route GET /authors
 * @description Get all authors
 * @returns {object} 200 - Author array
 * @returns {Error} 401 - Unauthorized
 */
router.get("/", allAuthors);

/**
 * @route GET /authors/:id
 * @description Get one author by its id
 * @param {string} id.path
 * @returns {object} 200 - Author
 * @returns {Error} 401 - Unauthorized
 */
router.get("/:id", singleAuthor);

/**
 * @route POST /authors
 * @description Add author
 * @param {object} author.body
 * @returns {object} 200 - Author added
 * @returns {Error} 401 - Unauthorized
 */
router.post("/", addAuthor);

/**
 * @route PUT /authors/:id
 * @description Update author by id
 * @param {string} id.path
 * @param {object} author.body
 * @returns {object} 200 - Author updated
 * @returns {Error} 401 - Unauthorized
 */
router.put("/:id", updateAuthor);

/**
 * @route DELETE /authors/:id
 * @description Delete author by id
 * @param {string} id.path
 * @returns 200 - Author deleted
 * @returns {Error} 401 - Unauthorized
 */
router.delete("/:id", deleteAuthor);

/* Exports */
module.exports = router;
