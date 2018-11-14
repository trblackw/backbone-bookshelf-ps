var app = app || {};

var searchButton = $("#search");

searchButton.on("click", fetchBooks);

var books = [];

async function fetchBooks() {
  var searchCriteria = [
    $("#author").val(),
    $("#title").val(),
    $("#releaseData").val(),
    $("#keywords").val()
  ];
  var nonEmptySearches = searchCriteria.filter(
    search => search !== undefined && search !== ""
  );
  const bookResponse = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${nonEmptySearches.join(
      ","
    )}`
  );
  const bookJSON = await bookResponse.json();
  const volumes = bookJSON.items.map(book => book.volumeInfo);
  volumes
    .map(detail => ({
      ...detail,
      authors:
        detail.authors.length > 1
          ? detail.authors.join(", ")
          : String(detail.authors)
    }))
    .map(books => new app.LibraryView(books));
}
