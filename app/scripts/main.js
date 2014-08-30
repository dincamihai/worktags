(function() {
  define(['backbone', 'marionette'], function(Backbone, Marionette) {
    var create_app;
    create_app = function(options) {
      var App;
      Backbone.Marionette.Region.prototype.attachHtml = function(view) {
        return this.$el.replaceWith(view.el);
      };
      App = new Backbone.Marionette.Application({
        regions: options.regions
      });
      _.each(options.initializers, function(initializer) {
        return App.addInitializer(initializer);
      });
      return App;
    };
    return create_app;
  });

}).call(this);
