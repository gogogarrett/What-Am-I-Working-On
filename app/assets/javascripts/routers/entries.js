Whatamiworkingon.Routers.Entries = Backbone.Router.extend({
  routes: {
    '': 'index',
    'entries/:id': 'show'
  },

  initialize: function() {
    this.collection = new Whatamiworkingon.Collections.Entries();
    this.collection.fetch();
  },

  index: function() {
    view = new Whatamiworkingon.Views.EntriesIndex({collection: this.collection});
    $("#container").html(view.render().el);
  },

  show: function(id) {
    alert(id);
  }

});
