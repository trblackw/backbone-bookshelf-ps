var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    imageLinks: "",
    title: "No title",
    author: "Unknown",
    publishedDate: "Unknown",
    keywords: "None" || [],
    publisher: "publisher",
    description: "description",
    categories: []
  }
});
