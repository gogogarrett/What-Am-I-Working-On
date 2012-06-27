window.Whatamiworkingon =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  init: -> 
    new Whatamiworkingon.Routers.Entries()
    Backbone.history.start()

$(document).ready ->
  Whatamiworkingon.init()
