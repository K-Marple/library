function buildCard(data) {
  const bookCard = document.getElementById("book-cards");
  const grid = document.createElement("ul");
  grid.className = "cards";

  data.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3 class="title">${book.title}</h3>
      <h5 class="author">${book.author}</h5>
      <div class="info">
        <p>Genre: ${book.genre}</p>
        <p>Published: ${book.published}</p>
        <p>Length: ${book.length}</p>
        <p>ISBN: ${book.isbn}</p>
        <p>Rating: ${book.rating}</p>
      </div>
    `;
    grid.appendChild(li);
  });

  bookCard.appendChild(grid);
}

window.addEventListener("DOMContentLoaded", () => {
  buildCard(databaseBooks);
});
