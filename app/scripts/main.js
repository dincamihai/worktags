(function() {
  define(['backbone', 'marionette'], function(Backbone, Marionette) {
    var main;
    main = {};
    main['create_app'] = function(options) {
      var App, initializer, _i, _len, _ref;
      Backbone.Marionette.Region.prototype.attachHtml = function(view) {
        return this.$el.replaceWith(view.el);
      };
      App = new Backbone.Marionette.Application({
        regions: options.regions
      });
      _ref = options.initializers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        initializer = _ref[_i];
        App.addInitializer(initializer)();
      }
      return App;
    };
    return main;
  });

}).call(this);
