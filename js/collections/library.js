var app = app || {};

app.BookShelf = Backbone.Collection.extend({
  model: app.Book,
  url: "https://www.googleapis.com/books/v1/volumes?",
  parse: response => {
    return response.items.map(item => ({
      ...item.volumeInfo,
      authors:
        item.volumeInfo.authors.length > 1
          ? item.volumeInfo.authors.join(", ")
          : String(item.volumeInfo.authors)
    }));
  }
});
