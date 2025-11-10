const bookController = require("./controllers/books");

const Util = {};

Util.buildBookView = async function (data) {
  let grid;
  if (data.length > 0) {
    grid = '<ul id="book-list">';
    data.forEach((book) => {
      grid += "<li>";
      grid +=
        '<a href="../../books-list/' +
        book.id +
        '" title="View ' +
        book.title +
        " by " +
        book.author +
        "></a>";
    });
  } else {
    grid += '<p class="notice">Sorry, no matching book found.</p>';
  }
  return grid;
};

module.exports = Util;
