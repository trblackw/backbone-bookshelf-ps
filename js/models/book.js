var app = app || {};

app.Book = Backbone.Model.extend({
   defaults: () => ({
     imageLinks: "",
     title: "",
     authors: [],
     publishedDate: "",
     publisher: "",
     description: "",
     categories: []
   })
 });
