(function() {
  define(function(require) {
    var app, main, models, options, views, _;
    _ = require('underscore');
    main = require('build/main');
    models = require('build/models');
    views = require('build/views');
    options = {
      regions: {
        content: '#content'
      },
      initializers: [
        function() {
          this.command_view = views.command_view;
          this.content.show(views.layout);
          views.layout.command.show(views.command_view);
          return views.layout.log_entries.show(views.entries_view);
        }
      ]
    };
    app = main.create_app(options);
    return app.start();
  });

}).call(this);
