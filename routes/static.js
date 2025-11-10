/* Require Statements */
const express = require("express");
const router = express.Router();

/* Static Routes */
router.use(express.static("public"));
router.use("/css", express.static(__dirname + "public/css"));
router.use("/js", express.static(__dirname + "public/js"));

/* Exports */
module.exports = router;
