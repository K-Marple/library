/* Required Statements */
const { body, validationResult } = require("express-validator");

/* Validation */
const validateBook = [
  /* Rules */
  body("title").isString().notEmpty(),
  body("author").isString().notEmpty(),
  body("isbn").isString().notEmpty(),
  body("published").isString().notEmpty(),
  body("genre").isString().notEmpty(),
  body("length").isString().notEmpty(),
  body("rating").isString(),

  /* Result */
  (req, res, next) => {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      return res.status(412).json({
        success: false,
        msg: "Failed validation",
        data: errs.array(),
      });
    }
    next();
  },
];

const validateAuthor = [
  /* Rules */
  body("firstName").isString().notEmpty(),
  body("lastName").isString().notEmpty(),
  body("birthdate").isString().notEmpty(),
  body("funFact").isString(),
  body("works").isString().notEmpty(),

  /* Result */
  (req, res, next) => {
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      return res.status(412).json({
        success: false,
        msg: "Failed validation",
        data: errs.array(),
      });
    }
    next();
  },
];

/* Exports */
module.exports = { validateBook, validateAuthor };
