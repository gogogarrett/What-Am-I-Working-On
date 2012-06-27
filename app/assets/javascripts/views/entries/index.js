Whatamiworkingon.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  events: {
    'submit #new_entry': "create_entry"
  },

  initialize: function() {
    this.collection.on("reset", this.render, this);
    this.collection.on("add", this.render, this);
  },

  render: function(){
    this.$el.html(this.template({entries: this.collection}));    
    return this;
  },

  create_entry: function(e) {
    e.preventDefault();
    this.collection.create({task: $("#new_entry_task").val()});
  }

});
