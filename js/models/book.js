var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    imageLinks: "",
    title: "",
    author: "",
    publishedDate: "",
    keywords: [],
    publisher: "",
    description: "",
    categories: []
  }
});
