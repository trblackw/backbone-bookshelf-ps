var app = app || {};

app.BookView = Backbone.View.extend({
  template: Handlebars.compile($("#book-template").html()),
  className: "book",
  initialize: function() {
    console.log("new view!");
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
