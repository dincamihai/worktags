(function() {
  define(['build/main', 'build/models', 'build/views'], function(main, models, views) {
    var app, options;
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
